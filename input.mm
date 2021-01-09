(+---------------------------------------------+
 |                  Iso testi                  |
 +---------------------------------------------+)

(Settings 
  (title "Suuri esimerkki")
  (defaultlang fi)
  (debug true)
  (show false)
)
(Paragraph title (align center) (case upper))


(title                     AKUN JA HANNUN VAPAAPÄIVÄ)
(title                            20.12.2020 
  (say kahdeskymmenes .. kahdettatoista vuonna 2020))
  
TODO:
- kuinka mahdollistetaann "say" myös Role-rooleille?
- alku- ja loppulainausmerkkejä ei puhuta
- lopputuloksen tiedoston nimessä ei loppulainausmerkkejä eikä välilyöntejä
                          

(synopsis 
  Pieni--muotoinen näytelmä. Käsi--kirjoitettu mm-kielen testaamista varten.

  Aku ja Hannu ovat kävelyllä. Iines on kutsunut heidät luokseen, mutta
  kumpikaan ei tiedä toisen olevan tulossa. He kohtaavatkin vähän ennen Iineksen
  taloa, ja til--anne on vähällä mennä riidaksi, onneksi Iines ehtii hätiin.
  Hänellä on kuitenkin Akulle ja Hannulle yllätys, jota kumpikaan ei ollut
  osannut odottaa.
)

(Role AKU 
  (pitch 0.9) 
  (gain 2) 
  (alias "Hei, olen Aku Ankka, omapäinen ankka.")
)

(Role HANNU 
  (pitch 1) (gain 1) (lang sv) (rate 1.01) 
  (alias "Hei, olen Hannu Hanhi, onnen kultapoika")
)

(Role IINES 
  (gain 1)
  (pitch 1.05)
  (rate 0.9) 
  (alias "Tui tui, olen Iines Ankka")
)
(Wait -- (delay 500))

(Sound bang (source bang.mp3) )
(Sound slap (source slap.mp3))
(Sound birdsong (source birdsong.mp3))
(Group Kaikki (members AKU HANNU IINES))
  
Ensin tarinan henkilöt esittäytyvät.

                  (AKU) 
                  (HANNU)
                  (IINES)

Nyt se alkaa, sa--noi "Ryan O'Neal".


ENSIMMÄINEN KOHTAUS
 

Aku ja Hannu koh--taa--vat.
He ovat molemmat epäluuloisia toisen aikeista.

                  (AKU 
              Moi Hannu!)

                  (HANNU 
              No mutta, hei Aku. 
              Mitäs teet täällä?)

                  (bang)

                  (--)

                  (AKU 
              Minun piti kysyä samaa sinulta. 
              Menen tietysti katsomaan Iinestä.
              Entäs sinä?)

                  (HANNU
              Iinestähän minäkin. 
              Hän odottaa minua.)

                  (slap)

                  (AKU 
              Eipäs, hänhän varta vasten kutsui 
              minut luokseen.)


TOINEN KOHTAUS 

Iineskin saapuu paikalle.
Hänellä on pojille vähän puuhaa.

                  (IINES
              Hei pojat.
              Kiva, että te molemmat pääsit--te 
              näin nopeasti.
              Tänään on siivouspäivä.)

Aku ja Hannu ovat aivan äimästyneitä.
He eivät kuule eivätkä näe mitään. 
Heidän päässään alkaa visertää. 

                  (birdsong)