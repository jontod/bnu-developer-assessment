import React, { useState, useEffect } from "react";
import "./App.css";
import { feeds } from "./feeds/feeds.json";
const axios = require("axios");

function App() {
  const [articles, setArticles] = useState([]);
  const [sortedArticles, setSortedArticles] = useState(false);

  //Return multiple get requests
  const mappedFeeds = feeds.map((feed) => {
    return axios.get(feed);
  });

  //Get innerHTML text without unwanted tags
  const getPropFromXML = (item, type) => {
    let itemText = item.querySelectorAll(type)[0].innerHTML;
    if (itemText.includes("CDATA")) {
      let withoutPreTag = itemText.replace("<![CDATA[", "");
      let withoutTags = withoutPreTag.replace("]]>", "");
      return withoutTags;
    }
    return itemText;
  };

  //Remove duplicate articles (looks for matching titles)
  const removeDuplicates = (sorted) => {
    const sortedArray = sorted.reduce((acc, curr) => {
      if (!acc.some((article) => article.title === curr.title)) {
        acc.push(curr);
      }
      return acc;
    }, []);
    return sortedArray;
  };

  //Sort the articles (new->old)
  const sortCollectionByDate = (collection) => {
    const sorted = collection.sort((a, b) => {
      return Date.parse(b.date) - Date.parse(a.date);
    });
    return removeDuplicates(sorted);
  };

  //create an array with js-objects from xml
  const createCollection = (parsedItems) => {
    const itemCollection = parsedItems.flatMap((items) => {
      let objArray = [];
      for (let i = 0; i < items.length; i++) {
        objArray.push({
          title: getPropFromXML(items[i], "title"),
          date: getPropFromXML(items[i], "pubDate"),
          link: getPropFromXML(items[i], "link"),
        });
      }
      return objArray;
    });
    return sortCollectionByDate(itemCollection);
  };

  //create xml collection of arrays from feeds
  const xmlParser = () => {
    const xmlItemsCollection = articles.map((item) => {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(item.data, "text/xml");
      const xmlArticles = xmlDoc.childNodes[0].querySelectorAll("item");
      return xmlArticles;
    });
    return createCollection(xmlItemsCollection);
  };

  //Triggers chain event to get sorted array of article objects
  // then sets state with the first 10 articles
  const handleNewFeed = () => {
    const handledFeed = xmlParser();
    const firstTen = handledFeed.slice(0, 10);
    setSortedArticles(firstTen);
  };

  const getFeeds = () => {
    axios
      .all(mappedFeeds)
      .then((res) => {
        setArticles(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .then(() => {
        console.log("axios executed");
      });
  };

  useEffect(() => {
    getFeeds();
  }, []);

  useEffect(() => {
    handleNewFeed();
  }, [articles.length]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Below are the 10 latest news</h1>
        {sortedArticles && (
          <div>
            <ul>
              {sortedArticles.map((item, i) => (
                <li key={i}>
                  <a href={item.link}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
