---
title: FAKE NEWS DETECTION - GRIP OP DESINFORMATIE
date: 2022-11-30T12:05:50.187Z
tags:
  - AI
showthedate: false
---
Het is vaak moeilijk te beoordelen of een artikel dat we online lezen gebaseerd is op feiten of niet. Sla de actualiteiten er maar op na: corona, berichtgeving uit Rusland over de oorlog met Oekraïne. Omdat het onmogelijk is om elk nieuwsbericht dat wordt gepubliceerd handmatig te verifiëren, is er veel onderzoek gedaan naar automatische detectie van verkeerde informatie. Maar kunnen we die algoritmen vertrouwen?

Het is vaak moeilijk te beoordelen of een artikel dat je online leest al dan niet op waarheid berust. Aangezien het onmogelijk is om elk stuk nieuws dat wordt gepubliceerd handmatig te verifiëren, is er veel onderzoek gedaan naar automatische detectie van onjuiste informatie. Maar kunnen we die algoritmen vertrouwen? Dat is wat Suzana Bašić, Marcio Fuckner en Pascal Wiggers en anderen onderzochten in hun Onderzoeksproject Explainable Fake News Detection.

Ten eerste keken zij naar de gegevens die worden gebruikt om computermodellen te trainen voor misinformatiedetectie. Aangezien complexe algoritmen veel data vereisen, worden de datasets vaak ook automatisch aangemaakt. Dat kan leiden tot bepaalde biases in de data en dus ook in de voorspellende modellen. Zij hebben bijvoorbeeld ontdekt dat de modellen vaak leren welke nieuws bronnen wel of niet te vertrouwen zijn in plaats van te leren of een individueel artikel onjuiste informatie bevat.

 Toen zij deze bron van bias uit de gegevens verwijderden, ontdekten zij dat een zeer eenvoudig algoritme resultaten opleverde die vergelijkbaar waren met die van een zeer geavanceerd algoritme. Dat is een interessante bevinding om verschillende redenen. Eenvoudiger modellen verbruiken minder middelen, waardoor ze duurzaam. Ze vereisen ook minder gegevens, waardoor we kleinere maar kwalitatief betere maar kwalitatief betere datasets te bouwen. Ten slotte zijn ze, in tegenstelling tot de meer complexe algoritmen, vaak verklaarbaar. Dat betekent dat ze kunnen verklaren waarom een model een bepaalde beslissing heeft genomen in elk geval.

Ten slotte voerden zij experimenten uit om de resultaten te onderzoeken van SHAP, een populaire verklaringsmethode die wordt gebruikt om de "black box"-algoritmen te verklaren. Dat zijn complexe algoritmen zoals neurale netwerken, waarbij het niet helemaal duidelijk is waarom ze bepaalde beslissingen nemen. Zij hebben verschillende problemen met deze methode vastgesteld wanneer deze wordt toegepast op tekst.

Toen ze deze methode gebruikten om een eenvoudiger model uit te leggen, werden ook veel voegwoorden en voorzetsels geselecteerd. Maar omdat het eenvoudigere model verklaarbaar was, konden ze konden ze zien dat die woorden helemaal niet zo belangrijk waren voor de voorspellingen. Dat betekent dat de SHAP-methode de modellen niet goed genoeg verklaart.

In toekomstig werk zijn ze van plan verder te analyseren waarom deze problemen zich voordoen en hoe ze kunnen worden vermeden.