# mm
Manuscript Manager 

---
marp: false
---

# Manuscript Manager
versio 0.1
Antero Kangas

Käsikirjoituksen elävöittäminen

## Perusominaisuudet
- Määritellään rooleja `Role`, taukoja `Wait` ja ääniä `Sound`
- Joillakin asioilla on oletusarvo, kuten oletuskieli on englanti, mutta oletusasetuksia voidaan muuttaa `Settings`
- Roolit lausuvat omilla äänillään repliikkejä
- Rooleista voidaan yhdistää ryhmiä `Group`, jotka puhuvat samaa reopliikkiä yhtäaikaa
- Puheiden lomaan ja päälle voidaan sijoittaa taukoja ja ääniä
- Puhuttu repliikki ja ääni voidaan tallettaa uudeksi ääneksi 
- Roolin ääntä voidaan muunnella jokaisen repliikin kohdalla, esimerkiksi korottaa tai hiljentää ääntä
- Ääniä voidaan muokata, feidata, leikata ja yhdistellä


## Syntaksi
- Kaikkien komentojen perusmuoto on 
`
"(" komennon_nimi arvot parametrit ")", missä 
- arvot on 0-n merkkijonoa, numeroa tai totuusarvoa 
- parametrit ovat 0-n parametria
- parametri on muoto "(" parametrin_nimi arvot ")"
- String: merkkijono on joko 
  - DQString: tuplalainausmerkkien (") välinen osuus lainausmerkit mukaan lukien,
  - SQString: yksinkertaisten lainausmerkkien (') välinen osuus lainausmerkit mukaan lukien tai
  - NQString: lainausmerkittömät merkkijonot, joissa ei saa olla tuplalainausmerkkejä, yksinkertaisia lainausmerkkejä, välilyöntejä, tabulaattoreita, rivin vaihtoja eikä vasenta eikä oikeaa kaarisulkua
- Number: numero on kokonaisluku tai desimaaliluku (sekä piste että pilkku käyvät) ja saa olla eksponenttiosakin (sekä iso-E että pieni-e käyvät)
- Bool: totuusarvo on false, False, FALSE, true, True tai TRUE
- Language: laillinen kielen kyhenne: en, fi, sv, ...
- kommentit:
    - lohkokommentti (* ... *) ja (+ ... +)
    - rivikommentti // ...
`

## Role: Roolin parametrit
### Roolin määritys
Komento `(Role arvo parametrit)`

| Parametri | Merkitys       | Muoto    | Oletus     |
| \<arvo\>  | Roolin nimi    | NQString | pakollinen |
| pitch     | Korkeus        | Number   | 1          |
| rate      | Nopeus         | Number   | 1          |
| gain      | Voimakkuus     | Number   | 1          |
| alias     | Koko nimi      | NQString | \<arvo\>   |
| lang      | Roolin kieli   | Language | deflang    |
| SOUND     | Äänen talletus | NQString | \<ei pak\> |

### Roolin kutsu eli repliikin lausuminen
Roolin NIMI käyttö: 
| Komento                   | Merkitys                                          |
| `(NIMI)`                  | lausutaan alias-parametrin arvo oletusasetuksilla |
| `(NIMI arvot)`            | lausutaan merkkijonot arvot oletusasetuksilla     |
| `(NIMI arvot parametrit)` | lausutaan merkkijonot arvot oletusarviot väliaikaisesti korvaten vastaavilla parametreilla |

Lisäksi voidaan antaa parametri (SOUND arvo), joka tallettaa äänen arvo-nimellä

## Wait

## Sound

## Group

## Settings

## Esimerkkejä

## Jatkosuunnitelmia
- Muodosta tekstistä käsikirjoitusformaatin mukainen tekstitiedosto
- tavutusvihje
- mp3-parametrit
- äänikirjasto
- valitun/valittujen roolien repliikit voi nauhoittaa ja käyttää 
- käyttöliittymä Android/Web
- myös kuvia ja videoita
- numeron kirjoitusmuoto (desimaalimerkki ja tuhaterotin)
- puheessa välimerkin jälkeen tauko, ellei jo ole

(sound name
  (rate n)
  (pitch n)
  (gain n)
  (start1 n)
  (end1 n)
  (duration1 n)
  (start2 n)
  (end2 n)
  (duration2 n)
  (fadein n)
  (fadeout n)
  (SOUND name)
)

(settings
)

(Paragragh Name
   (align left|center|right) [left] 
   (voice name) [narrator]
   (leftmargin n) [0]
   (rightmargin n) [0]
   (maxwidth n) [linewidth - lefmnargin - rightmargin]
   (case upper|lower) [lower]
)

defaultsettings
- linewidth=72
- h1...h6 = narrator
- NAME = name of role
- PARENTHESIS = narrator
- REPLIQUE replique of role