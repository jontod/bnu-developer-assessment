# Uppgift för utvecklare på BNU

Bonnier News publicerar dagligen nya artiklar och annat redaktionellt
material i sina olika tidningar.
Materialet publiceras under kategorier såsom nyheter, sport, eller kultur.
Visst innehåll publiceras i flera olika kategorier samtidigt. Det senast
publicerade materialet exponeras under RSS-flöden.

## Uppgift

Din uppgift är att ta fram en enkel applikation som:

- Hämtar det senaste innehållet från varje flöde.
- Visar en lista över de tio senast publicerade av alla artiklar som finns
  i de RSS-flöden i filen [feeds.json](feeds.json), sorterade i datumordning.
  För att klara av detta måste du slå samman innehållet från alla flöden och ta
  bort dubletter--innehåll som publicerats i fler än en kategori.
- Resultatet kan se ut ungefär som nedan (här uttryckt i Markdown för att länka artiklarna).

### Exempelresultat

1. [Närmsta dagarna avgörande för Norge](https://www.dn.se/varlden/solberg-narmsta-dagarna-avgorande-for-norge/)
2. [Ett sterilt barnäventyr](https://www.dn.se/kultur/rymdresan-fartigt-men-sterilt-barnaventyr/)
3. [Svenska simmarna redo för bubblan i Budapest](https://www.dn.se/sport/svenskarna-ar-redo-for-bubblan-i-budapest/)
4. [”Bossen” släpper nytt album i höst](https://www.expressen.se/noje/bossen-slapper-nytt-album-i-host/)
5. [Coronakrisen kräver fördjupat alternativ till januariavtalet](https://www.dn.se/debatt/coronakrisen-kraver-fordjupat-alternativ-till-januariavtalet/)
6. [Fartfyllt med djuragenter](https://www.dn.se/kultur/djuragenterna-haller-farten-uppe/)
7. [Tränare och experter tippar: Här hamnar OV](https://www.hd.se/2020-09-10/tranare-och-experter-tippar-har-hamnar-ov)
8. [Sänkt skatt – för sju miljoner svenskar](https://www.sydsvenskan.se/2020-09-10/sankt-skatt-for-sju-miljoner-svenskar)
9. [Spårvagnen ska köra på stolpe](https://www.sydsvenskan.se/2020-09-10/sparvagnen-ska-kora-pa-stolpe)
10. [C och L: Sänkt inkomstskatt med 13,5 miljarder](https://www.dn.se/ekonomi/forslag-30-miljarder-kronors-skattesankningar/)

## Instruktioner

- Du kan uppfylla uppgiften hur du vill; en webapp, ett web-API, en mobilapp,
  ett library, en CLI-app, eller något annat.
- Du kan använda vilket programmeringsspråk och ramverk du vill.
- Börja med att klona det här repot.
- Din applikation behöver inte klara någon hög last. Fundera ändå på hur du
  skulle kunna anpassa den för att klara mycket högre trafik, exempelvis köras
  vid varje besök på Expressen.se. 
- Lägg inte mer än fyra timmar på uppgiften. Håll det enkelt.
- Tänk på hur du hade löst uppgiften om du haft mer tid. Fundera över vilka
  avvägningar du gör, och vad du hade inkluderat eller jobbat vidare på
  om du hade fortsatt att utveckla applikationen som en applikation redo att
  driftsätta och vidareutveckla.
- Din lösning skall lämnas som en eller gärna flera commits till din "fork",
  tillsammans med en instruktion som beskriver hur man kör applikationen, samt
  en kort beskrivning av vilka avvägningar och avgränsningar du gjort.
- När du skickat in din lösning, kommer du att få möjlighet att göra en mindre
  förändring i en parprogrammeringsuppgift tillsammans med en kollega.

## Kom ihåg

Syftet med uppgiften är inte att skapa den perfekta lösningen, snarare att ta
fram en hyfsat enkel lösning inom loppet av ett par timmar. Du kommer inte att
bedömas enkom på hur du valt att lösa uppgiften, utan lika mycket på hur du
resonerar kring din lösning och hur den kan anpassas.

Lycka till!
