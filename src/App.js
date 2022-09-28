import React from "react";
import "./App.css";
import Testi from "./components/Testi";
import TestiDetails from "./components/TestiDetails";
import Finalfooter from "./components/Finalfooter";
import NewHeader from "./components/headers/NewHeader";
import Video from "./components/Video";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Prodotto from "./components/Prodotto";
import Radio from "./components/Radio";
import Login from "./components/admin/Login";
import AdminHome from "./components/admin/AdminHome";
import AdminSottoscrizioni from "./components/admin/AdminSottoscrizioni";
import HomeFinal from "./components/home/HomeFinal.jsx";
import Test from "./components/Test";

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <NewHeader />
        <Switch>
          <Route path="/admin/login">
            <Login />
          </Route>
          <Route path="/admin/home">
            <AdminHome />
          </Route>
          <Route path="/admin/sottoscrizioni">
            <AdminSottoscrizioni />
          </Route>
          <Route path="/testi">
            <Testi
              titoli={[
                "Tranquill",
                "Pippat",
                "in form",
                "uapp",
                "T' Magnat",
                "salvini",
                "Guardami negli occhi",
                "Stai con me",
                "un euro in piu'",
                "amore e soldi? no!",
              ]}
              url={[
                "tranquill",
                "pippat",
                "in form",
                "uapp",
                "T' Magnat",
                "salvini",
                "Guardami negli occhi",
                "Stai con me",
                "un euro in piu'",
                "amore e soldi no!",
              ]}
              cover={[
                "./images/cover/tranquill.png",
                "./images/cover/pippat.png",
                "./images/cover/in-form.png",
                "./images/cover/uapp.png",
                "./images/cover/t-magnat.png",
                "./images/cover/salvini.png",
                "./images/cover/guardami-negli-occhi.png",
                "./images/cover/stai-con-me.png",
                "./images/cover/un-euro-in-piu.png",
                "./images/cover/amore-e-soldi.png",
              ]}
            />
          </Route>
          {/* ROTTE DEI TESTI */}
          <Route path="/tranquill">
            <TestiDetails
              mp3="./songs/tranquill.mp3"
              data="29/07/2022"
              immagine="./images/cover/tranquill.png"
              titolo="Tranquill"
              desc={`Prod by Red Family
              Mix & Master by Yakikoji
              Regia by Red Family
              Filmed and edited by Tony Becher`}
              spotify="https://open.spotify.com/album/30UYJi47Vmx1D2IrtADi9f"
              testo={`
              [Ritornello 1: Gianni Red]
Tranquill
Ua sto pop sciolt
Tranquill
Ua sto pop sciolt
Tranquill
Ua sto pop sciolt
Tra-tra-tranquill
Ua sto pop sciolt
Tranquill
Ua sto pop sciolt

[Strofa 1: Gianni Red]
So' comme o’ Colombo
Perchè sacc fà tt’ cos
Scinn nsiem a me !  è comm si iss a scol
Parol, parol, parol, parol
A cunusc sta canzon? chell iev 'e mod
E tu mi vuoi importunare 
Ma nn’ t' rong o' mod
Teng semp a risposta pront aret a' mol
Dot canor, not e parol
A cervella nummr un chest è a' prov ro' nov
A piccrill m' chiammavn pummarol
Mo e' pummarol te lanciamm appriess, tesor 
Sacc cantà, sacc sunà, sacc scrivr, sacc parlà
Sacc cantà, sacc sunà, sacc scrivr, sacc parlà
E ancor ! Chiammem Gianni Tuttofare
Nun vogl na scarpett ma o' stival 'e l’ Italia
Allor nun le capit se voglio lo so fare
Io quando parlo non uso il condizionale
Se vuoi ci puoi provare, che ti costa tentare?
Ma è un poco come a scuola, frà copiare non vale
Che vuoi fare?

[Ritornello 2: Gianni Red]
Tranquill
Ua sto pop sciolt
Tranquill
Ua sto pop sciolt
Tranquill
Ua sto pop sciolt
Tra-tra-tranquill
Ua sto pop sciolt
Tranquill
Ua sto pop sciolt

[Strofa 2: Loris Bastr]
Accort ca si mett e' pall 'ncopp a' valanz , s' scass
E mett e' cos in chiar fin e quann nn' m' rilass
Acqua cristallin , vogl fa nu tip ‘e vit over checazz
Over ch' e' sord, over ch' e' fatt
Io ? Quann maj m' stev attiggiann?
Teng o' record re record ca nn'e maj tnut ammó
Ven Report riport , fa frni e' pazziell uaglió
Cazzó , t vuó scetà?
Staj alliert comme nu bacchetton
Vuo parlà e music tra Bach e Beethoven?
Se sei il più umile del mondo  non lo dici a nessuno
Carriera al culmine , a tratti verso il dirupio
La guerra tra i poveri non arricchisce nessuno
Basta dire "Hai ragione" ed eviti il miscuglio
Il prezzo da pagare non si può scontare
Hai dato a tutte le persone un valore materiale
Quello che semini raccogli
Quindi cosa credevi di mangiare?
So catare, so suonare, so ballare
So catare, so suonare, so ballare
So catare, so suonare, so ballare
Sono un tuttofare 
Trovatemi una cosa sola che non so fare

[Ritornello 3: Gianni Red]
Tranquill
Ua sto pop sciolt
Tranquill
Ua sto pop sciolt
Tra-tra-tranquill
Ua sto pop sciolt
Tranquill
Ua sto pop sciolt
Tranquill
Ua sto pop sciolt
Tranquill
Ua sto pop sciolt
Tra-tra-tranquill
Ua sto pop sciolt
Tranquill
Ua sto pop sciolt

              `}
              traduzione={``}
            />
          </Route>

          <Route path="/pippat">
            <TestiDetails
              mp3="./songs/pippat.wav"
              data="31/05/2022"
              immagine="./images/cover/pippat.png"
              titolo="Pippat"
              desc={`Gianni Red & Loris Bastr presentano : "Pippat" 
              Suoni Red Family
              Regia  Red Family 
              D.o.p. & camera : Marco Bruno
              Produzione video Red Family`}
              spotify="https://open.spotify.com/track/6mAWFi5vgqwiquV1kKFrtq?si=Y1QUc0BuQhyyRwSQjd877Q"
              testo={`
              [Intro]
              Ok,ok famm sentì là mò comm s'sent chest
              
              [Ritornello 1: Gianni Red & Loris Bastr]
              Uagliò ma che te pippat?
              (Fratm, fratm)
              T' vec tutt ingrippat
              (Simm e chiù fort 'ro munn)
              Staj tutt e juorn nda bas
              Uagliò ma che te pippat
              T' vec tutt ingrippat
              (Nun m' fa pensà mammamì)
              Staj t'e juorn nda bas
              (Simm e chiu' fort 'ro munn)
              Ce rat aint co nas
              
              [Strofa 1: Gianni Red]
              É megl ch' riman a cas
              Azz ce rat aind co nas
              E sord comm le 'pparat?
              Chissà a chi ce le domandat
              Azz gir rind a na cabrio
              I t'vec rind na gabbia
              Tu staj rind a machin 'e babb
              I nda machin chin 'e inciarm
              E tu nda stu gir o' saj ch' nn' c' appizz
              Fann na guerr p' apparà nu cinq
              Spiennl meglio e pavm nu Spritz
              
              [Strofa 1: Loris Bastr]
              Hanno fatt 50 blitz
              Hanno pigliat a nu uaglion p'nat
              E infatti nn' er iss
              Gir p' tutt Napoli co' DR 350
              Si m' gir m' chiammn 'fratm'
              Ma io e chist nun c'salutamm
              Si s'avvicinano semp chiù e guardie
              Nun vò ricr ca c'stann fermann
              Te pippat tutt a mesat!
              A semman 150!
              Noi veniamo dal buco del culo
              Quella parte del corpo non protetta
              Ho mangiato pastina invisibile
              Ho respirato secchi di merda
              Con le rime siamo killer
              Chiusa la faccenda
              Non fotti col mister
              Soprattutto se hai quella squadretta!
              
              [Strofa 1: Gianni Red]
              Staj tt' fus po' bianc
              I m' fum na cann
              Ce n' jamm in Afghanistan
              Arò nisciun ce uard
              Pure che fatt nu figl, bucchinà
              M' chier sulament ch' ce staj 'nsignann
              Cazz m' ric si o' boss
              O' boss 'e sta capocchia, nda bucchin 'e mammt
              
              [Bridge 1: Gianni Red & Loris Bastr]
              Liev nu poc man
              Pcchè nun è arta toj
              Liev nu poc man
              Statt nu poc a casa toj
              Liev nu poc man
              Nun vogl' sentì a voce toja
              Liev nu poc man
              Stamm trasenn nda capa toj
              
              [Ritornello 2: Gianni Red & Loris Bastr]
              Uagliò ma che te pippat?
              T' vec tutt ingrippat
              (Nun m' fa pensà mammamì)
              Staj tutt e juorn nda bas
              (Simm e chiu' fort 'ro munn)
              Ce rat aint co nas
              Uagliò ma che te pippat
              T' vec tutt ingrippat
              Staj t'e juorn nda bas
              Ce rat aint co nas
              
              [Strofa 2: Loris Bastr]
              Bast! Miettece nu punt
              Miettece ruj punt
              No nu punt e virgl
              O' frà si ridicl, crirm
              É pop o' minim ch' m' mett a rirer
              E' itt ca vuò scrivr vivr
              A drog fa fà sti discors, t' capisc
              Lievt stu vizj
              T'o torn a ripeter tutt e juorn
              T' faj na pell e manc t' arrizz
              
              
              [Strofa 2: Gianni Red]
              Nun tien nu punt fiss
              Nun tien na fess
              Tien na fiss
              E o' sacc ca na bott le fatt
              E infatti ngopp o' nas è rimast na strisc
              Si comm a piramid egizia
              A tomb ce sta, ce manc sul tu aint
              Stu piezz è fatt a Freestyle
              E tu ra pippat nemmanc ce crir
              
              [Bridge 2: Gianni Red & Loris Bastr]
              Liev nu poc man
              Pcchè nun è arta toj
              Liev nu poc man
              Statt nu poc a casa toj
              Liev nu poc man
              Nun vogl' sentì a voce toja
              Liev nu poc man
              Stamm trasenn nda capa toj
              
              [Ritornello 3: Gianni Red & Loris Bastr]
              Uagliò ma che te pippat?
              T' vec tutt ingrippat
              (Nun m' fa pensà mammamì)
              Staj tutt e juorn nda bas
              (Simm e chiu' fort 'ro munn)
              Ce rat aint co nas
              Uagliò ma che te pippat
              T' vec tutt ingrippat
              Staj t'e juorn nda bas
              Ce rat aint co nas
              
              [Strofa 3: Gianni Red]
              E fin 'ra storj
              Bast mument chin 'e baldorj
              Critc ancor
              Chiamm'm "Gianni Discriminatorj"
              Tirt a robb
              Cu figlt a scol
              
              [Strofa 3: Loris Bastr]
              Ancora, ancora, ancora
              Questo pezzo è per tutti i drogati d'Italia
              Ah! Mi manca l'aria
              Mi manca casa, mi manca cosa?
              Salteresti in aria
              
              [Strofa 3: Gianni Red]
              Azzicct 'e pont fin e a fin
              Assiett buon e nun fà casin
              Vivt o' vin e vir ch' vit
              Circl o' sang 'nde vas sanguign
              
              [Strofa 3: Loris Bastr]
              Dimmi se è A POSITIVO
              Dimmi se sei recidivo
              Dimmi se sei più deciso
              Dimmi che sei come ti ho descritto
              
              [Outro: Gianni Red & Loris Bastr]
              Liev nu poc
              Fatt a là Giuà mo' vec io
              Nn' o' vir che e facc vulà senza cucain Lorì
              NA-NA-Napoli              
              `}
              traduzione={`
              [Intro]
              Ok,ok fammi sentire lì come si sente questa
              
              [Ritornello 1: Gianni Red & Loris Bastr]
              Ragazzo ma che ti sei pippato?
              (Fratello, fratello)
              Ti vedo molto ingrippato
              (Siamo i più forti del mondo)
              Sei tutti i giorni nella base
              Ragazzo ma che ti sei pippato?
              Ti vedo molto ingrippato
              (Non mi far pensare, mamma mia!)
              Sei tutti i giorni nella base
              (Siamo i più forti del mondo)
              Ci hai dato dentro col naso
              
              [Strofa 1: Gianni Red]
              Meglio che resti a casa
              Addirittura, ci hai dentro col naso
              I soldi come li hai trovati?
              Chissà a chi li hai domandati
              Addirittura giri dentro una cabrio
              Io ti vedo dentro una gabbia
              Tu sei nella macchina di babbo
              Io in una macchina pieno di inciarmi
              E tu in questo giro lo sai che non c' entri
              Fanno una guerra per comprare un cinque
              Spendili meglio e pagami uno Spritz
              
              [Strofa 1: Loris Bastr]
              Hanno fatto 50 blitz
              Hanno preso un ragazzo per un altro
              E infatti non era lui
              Giro per tutta Napoli con il DR 350
              Se mi giro mi chiamano 'fratello'
              Ma io e questo non ci salutiamo
              Se si avvicinano sempre più le guardie
              Non vuol dire che ci stanno fermando
              Ti sei pippato l' intera mesata!
              La paga settimanale 150!
              Noi veniamo dal buco del culo
              Quella parte del corpo non protetta
              Ho mangiato pastina invisibile
              Ho respirato secchi di merda
              Con le rime siamo killer
              Chiusa la faccenda
              Non fotti col mister
              Soprattutto se hai quella squadretta!
              
              [Strofa 1: Gianni Red]
              Sei completamente fuso per il bianco
              Io mi fumo una canna
              Ce ne andiamo in Afghanistan
              Dove nessuno ci scruta
              Anche se hai fatto un figlio, 
              Mi chiedo solamente cosa gli stai insegnando
              Cazzo mi dici che sei il boss , figlio di puttana
              Il boss di sto cazzo, la puttana di tua madre
              
              [Bridge 1: Gianni Red & Loris Bastr]
              Leva un pò mano
              Perchè non è arte tua
              Leva un pò mano
              Resta un pò a casa tua
              Leva un pò mano
              Non voglio sentire la tua voce
              Leva un pò mano
              Stiamo entrando nella tua casa
              
              [Ritornello 2: Gianni Red & Loris Bastr]
              Ragazzo ma che ti sei pippato?
              Ti vedo molto ingrippato
              (Non mi far pensare, mamma mia!)
              Sei tutti i giorni nella base
              (Siamo i più forti del mondo)
              Ci hai dato dentro col naso
              Ragazzo ma che ti sei pippato?
              Ti vedo molto ingrippato
              Sei tutti i giorni nella base
              Ci hai dato dentro col naso
              
              [Strofa 2: Loris Bastr]
              Basta! Mettici un punto
              Mettici due punti
              Non un punto e virgola
              Fra' sei ridicolo, credimi
              É proprio il minimo che mi metto a ridere
              Hai detto che vuoi scrivere, vivere
              La droga fa fare questi discorsi,ti capisco
              Levati questo vizio
              Ti torno a ripetere tutti i giorni
              Ti fai una scopata e neanche indurisci
              
              
              [Strofa 2: Gianni Red]
              Non hai un punto fisso
              Non hai una fessa
              Hai una fissa
              E lo so che una botta l' hai fatta
              E infatti sul naso è rimasta una striscia
              Sei come la piramide egizia
              La tomba c'è, ci manchi tu dentro
              Questo pezzo è fatto a Freestyle
              E tu da pippato neanche ci credi
              
              [Bridge 2: Gianni Red & Loris Bastr]
              Leva un pò mano
              Perchè non è arte tua
              Leva un pò mano
              Resta un pò a casa tua
              Leva un pò mano
              Non voglio sentire la tua voce
              Leva un pò mano
              Stiamo entrando nella tua casa
              
              [Ritornello 3: Gianni Red & Loris Bastr]
              Ragazzo ma che ti sei pippato?
              Ti vedo molto ingrippato
              (Non mi far pensare, mamma mia!)
              Sei tutti i giorni nella base
              (Siamo i più forti del mondo)
              Ci hai dato dentro col naso
              Ragazzo ma che ti sei pippato?
              Ti vedo molto ingrippato
              Sei tutti i giorni nella base
              Ci hai dato dentro col naso
              
              [Strofa 3: Gianni Red]
              E fine della storia
              Basta momenti pieni di baldoria
              Critico ancora
              Chiamami "Gianni Discriminatorio"
              Tirati la roba
              Con tuo figlio a scuola
              
              [Strofa 3: Loris Bastr]
              Ancora, ancora, ancora
              Questo pezzo è per tutti i drogati d'Italia
              Ah! Mi manca l'aria
              Mi manca casa, mi manca cosa?
              Salteresti in aria
              
              [Strofa 3: Gianni Red]
              Rovinati fino alla fine
              Siediti per bene e non fare casino
              Bevi del vino e vedi che vita
              Circola sangue nei vasi sanguigni
              
              [Strofa 3: Loris Bastr]
              Dimmi se è A POSITIVO
              Dimmi se sei recidivo
              Dimmi se sei più deciso
              Dimmi che sei come ti ho descritto
              
              [Outro: Gianni Red & Loris Bastr]
              Leva un pò
              Spostati , Gianni ci penso io
              Non vedi che li faccio esaltare senza cocaina,Loris
              NA-NA-Napoli              
              `}
            />
          </Route>

          <Route path="/in form">
            <TestiDetails
              mp3="./songs/inform.mp3"
              data="01/01/2022"
              immagine="./images/cover/in-form.png"
              desc={`Gianni Red & Loris Bastr presentano :  In form 
              Una produzione 56K Productions`}
              titolo="In form"
              spotify="https://open.spotify.com/album/6qDhmT..."
              facebook="https://fb.com/redfamilymusic"
              insta="https://www.instagram.com/redfamilymusic
              "
              testo={`
              [Intro:Loris Bastr]
              Semp in form,
              Giuvinò, stamm semp in form 
              
              [Ritornello:Loris Bastr]
              P' fà o figl  'e bucchin cu mmè 
              Ce ne vonn 10 comme te ,
              (Over sto facenn frà crireme)
              P' fà e sord a palat nn' aidè
              O boss è cazz e te taglià e det , sè
              P' fà o figl 'e bucchin cu mmè 
              (Piezz 'e mongl)
              Ce ne vonn 10 comme te
              (Over sto facenn frà crireme)
              Agg' bbuscat a 30 e' lor fratè
              Ma m' so susut senza nient a' vrè , sè
              
              [Strofa 1: Loris Bastr]
              Tutt' cumpagn , po' fuine t' quant
              Chisti 'ca trasettn cu nu fierr 'nda na piazz
              Uà figl 'e bucchì nun stev fuienn, 
              Frà stev vulann
              Ch' iss fatt o' post mij?
              T' quant che parol ch' se fann mast
              So t' facc 'e cazz
              Tutt quant simm amic
              Bast cu sti scoop 'e malavit , 
              Mittitece nu punt e bast
              
              [Strofa 2 : Gianni Red]
              E chest so cronache 'e pazz
              A cas volano e piatt
              Mammà sta ch' e colic a' panz 
              Semp o stess
              Nun se smov na cart
              Miett e sord nde man sbagliat
              O nonn t' er avvisat
              L'esperienz è o megl mandat
              Si accerev , ch' er cagnat
              E chest so cronache e' pazz
              A cas volano e piatt
              Mammà sta ch' e colic a' panz ,
               Semp o stess
              Nun se smov na cart
              Miett e sord nde man sbagliat
              O nonn t' er avvisat
              L'esperienz è o megl mandat
              Si accerev , ch' er cagnat
              
              [Strofa 3 : Gianni Red & Loris Bastr]
              Yè , a carn acopp , e maccarun a sott ,
              Ma che dic
              Amm magnat rind o stess piatt 
              E manc m' salut
              Cin cin , facimm nu brindisi a facc 'e stu suzzus
              Big dream , ch' e cervell fus
              Chius 'nda na stanz 
              Cu na man tocc o mur 
              Cu na man tocc o munn
              Dream team , v zumpamm n' cap 
              Nun ce servn pallun
              A pecr p' nisciun 
              Aspè ch' a ce sentn e criature !
              
              [Ritornello 2 : Loris Bastr ]
              P' fà o figl  'e bucchin cu mmè 
              Ce ne vonn 10 comme te ,
              (Over sto facenn frà crireme)
              P' fà e sord a palat nn' aidè
              O boss è cazz e te taglià e det , sè
              P' fà o figl 'e bucchin cu mmè 
              (Piezz 'e mongl)
              Ce ne vonn 10 comme te
              (Over sto facenn frà crireme)
              Agg' bbuscat a 30 e' lor fratè
              Ma m' so susut senza nient a' vrè , sè
              (Semp in form)
              
                  `}
              traduzione={`
              [Intro:Loris Bastr]
              Sempre in forma,
              Giovanotto, siamo sempre in forma
              
              [Ritornello:Loris Bastr]
              Per fare il figlio di puttana con me
              Ce ne vogliono 10 come te,
              (Davvero sto facendo fratello credimi)
              Per fare soldi a palate, non hai idea
              Il boss è capace di tagliarti le dita, si
              Per fare il figlio di puttana con me
              (Mongoloide)
              Ce ne vogliono 10 come te
              (Davvero sto facendo fratello credimi)
              Ho preso botte da 30 di loro, fratello
              Ma mi sono alzato senza problemi , si
              
              [Strofa 1: Loris Bastr]
              Tutti amici , poi scappano tutti
              Questi entrarono con una pistola in una piazza
              Cazzo figlio di puttana non stavo scappando, 
              Fratello stavo volando
              Che avresti fatto al posto mio?
              Tutti quanti con le parole si fanno maestri
              Sono tutti facce di cazzo
              Tutti quanti siamo amici
              Basta con questi scoop di malavita, 
              Metteteci un punto e basta
              
              [Strofa 2 : Gianni Red]
              Queste sono cronache di pazzi
              A casa volano i piatti
              Mia mamma ha le coliche alla pancia
              Sempre lo stesso
              Non si smuove una carta
              Metti i soldi nelle mani sbagliate
              Il nonno ti aveva avvisato
              L' esperienza è il miglior mandato
              Se uccideva, cosa sarebbe cambiato?
              Queste sono cronache di pazzi
              A casa volano i piatti
              Mia mamma ha le coliche alla pancia
              Sempre lo stesso
              Non si smuove una carta
              Metti i soldi nelle mani sbagliate
              Il nonno ti aveva avvisato
              L' esperienza è il miglior mandato
              Se uccideva, cosa sarebbe cambiato?
              
              [Strofa 3 : Gianni Red & Loris Bastr]
              Yè , la carne sopra , i maccheroni sotto,
              Ma che dici? Abbiamo mangiato nello stesso piatto
              E neanche mi saluti?
              Cin cin , Facciamo un brindisi alla faccio di questo (uomo) sporco
              Grande sogno, con i cervelli fusi
              Chiusi in una stanza
              Con un mano tocco il muro
              Con una mano tocco il mondo
              Dream Team, vi saltiamo in testa
              Non ci servono palloni
              A pecora per nessuno,
              Aspetta , che ci sentono i bambini!
              
              [Ritornello 2 : Loris Bastr ]
              Per fare il figlio di puttana con me
              Ce ne vogliono 10 come te,
              (Davvero sto facendo fratello credimi)
              Per fare soldi a palate, non hai idea
              Il boss è capace di tagliarti le dita, si
              Per fare il figlio di puttana con me
              (Mongoloide)
              Ce ne vogliono 10 come te
              (Davvero sto facendo fratello credimi)
              Ho preso botte da 30 di loro, fratello
              Ma mi sono alzato senza problemi , si
              (Sempre in forma)              
              `}
            />
          </Route>

          <Route path="/uapp">
            <TestiDetails
              mp3="./songs/uapp.wav"
              data="11/7/2019"
              immagine="./images/uapp.jpg"
              titolo="uapp"
              testo={`
              [Intro: Loris Bastr]
              Quant 'e 'pparat?
              Quant 'e 'pparat?
              Allor 'e sgarrat
              Quant 'e 'pparat? Ye
              Tesò , c' sta succrenn? Ric allor c' amma fà?
              Tu  l' 'e fatt overament  quann t' ann itt va a rubbà
              Azz , e 'ccunciat o' vetr nuov, ma tu a cap ira accuncià
              Primm 'e scennr tt' sbattut  uard semp chi ce stà!
              
              [Ritornello 1: Gianni Red & Loris Bastr]
              Nun fà o' uapp, nun fà o' uapp 
              Parl poc , sta tranquill , nun fà o' uapp
              (Miezu scè!)
              Nun fà o' uapp, nun fà o' uapp
              Piglt na camumill nn fà o' uapp !
              ( Pier-p-tè ! )
              
              [Strofa 1: Loris Bastr]
              Ti aspetto all’altare come Tony Colombo 
              Musica da boss in sottofondo 
              Hai una toia con le tette grandi 
              coi capezzoli giganti sul cell come sfondo
              Qui la gente urla, a non sa a che va in contro 
              Se vuoi rubare frà ci metti un millisecondo
              Se vuoi rinunciare puoi mandare a puttane
              Per la gente normale non c’è un pò di sconto
              La legge non è uguale per tutti ( O saje)
              Nasciamo e moriamo fottuti ( O saje)
              Un ponte ti istiga , dice "ti butti?"
              E nel mentre cadi poi tanti saluti
              Odio le guardie, le cose le dico in faccia
              Porca puttana mannaggia, ero sotto casa 
              Si avvicina un SH, pistola nera puntata in faccia 
              Cazzo ma è uscita dell' acqua?
              Questa pistola non è mica vera, non spara  
              'Fratello capisci devo portare mangiare a casa '
              Ma come mangiare a casa?
              Hai una maglietta di marca, hai un pantalone di Prada
              Chi ruba si veste meglio di chi lavora
              Questa è l’Italia !
              Flow 41 bis, voglio un pò d’aria 
              Solo un poco d’aria perché devo pensare
               Dagli sbagli si cresce si matura e impara 
              Meglio stare solo a quanto pare 
              Ballo moonwalk ma non vado mai indietro
              Metto burro saporito viene meglio 
              Comodo comodo mi siedo 
              Le cose ultimamente me le prendo
              non le chiedo, fanculo!
              
              [Ritornello 2: Gianni Red & Loris Bastr]
              Nun fà o' uapp, nun fà o' uapp 
              Parl poc , sta tranquill , nun fà o' uapp
              (Miezu scè!)
              Nun fà o' uapp, nun fà o' uapp
              Piglt na camumill nn fà o' uapp !
              ( Fo uapp? )
              
              [Strofa 2: Gianni Red]
              Uapp, patm ric :"nun fà o' uapp"
              mamm ric :"nun fà o' uapp"
              Ma 'e vot nun 'o facc a post
              Sai è difficil a nn fà o' uapp
              Nda nu munn tropp chin 'e uapp
              pur tu abbì a fà o' uapp
              Ma sul quann t' conven
              'Nfatt facist 'o brav annanz e uardj
              Cagnast facc
              Crè mò nun e cacc e' pall?
              E fatt o' giall?
              E iamm fà stu cagn 'e marc,  fall sta strag
              Iett subit e uardj p' l' arj e cacc sta ragg
              Pò riman e matin 'ncopp e' giurnal nt' n fà proprj
              Po t' bussn a cas , r'ann t' ne fà nov
              E già ce staj pnsann acopp,  agg vist, nè
              starrai pnsann : ''ma c' fin e merd''
              Vogl aspirà a megl
              Frà n' accir a gent 
              Quala mitragliett, qual Billaden
              Famm fà na vita bell, magn Vitasnell
              Legg Pirandell , facc pilates
              Ropp m' fum na sigarett
              'ncopp a nu divanettt
              A vit e chi vò sta quiet
              
              [Bridge: Loris Bastr]
              Tesò , c' sta succrenn? Ric allor c' amma fà?
              Tu  l' 'e fatt overament  quann t' ann itt va a rubbà
              Azz , e 'ccunciat o' vetr nuov, ma tu a cap ira accuncià
              Primm 'e scennr tt' sbattut  uard semp chi ce stà!
              
              [Ritornello 3: Gianni Red & Loris Bastr]
              Nun fà o' uapp, nun fà o' uapp 
              Parl poc , sta tranquill , nun fà o' uapp
              (Miezu scè!)
              Nun fà o' uapp, nun fà o' uapp
              Piglt na camumill nn fà o' uapp !
              ( Pier-p-tè ! )              
                  `}
              traduzione={`
              [Intro: Loris Bastr]
Quanto hai apparato?
Quanto hai apparato?
Allora hai sgarrato
Quanto hai apparato?Ye
Tesoro , che succede? Dimmi allora cosa dobbiamo fare?
Tu l' hai fatto sul serio quando ti hanno detto di andar a rubare
Cazzo, hai aggiustato il vetro nuovo , ma dovevi aggiustare la testa
Prima di scendere pieno di te , guarda sempre chi c'è intorno

[Ritornello 1: Gianni Red & Loris Bastr]
Non fare il guappo , non fare il guappo!
Parla poco , stai tranquillo , non fare il guappo!
(Scemo!)
Non fare il guappo , non fare il guappo!
Prendi una camomilla , non fare il guappo!
( Piedi-per-terra! )

[Strofa 1: Loris Bastr]
Ti aspetto all’altare come Tony Colombo 
Musica da boss in sottofondo 
Hai una toia con le tette grandi 
coi capezzoli giganti sul cell come sfondo
Qui la gente urla, a non sa a che va in contro 
Se vuoi rubare frà ci metti un millisecondo
Se vuoi rinunciare puoi mandare a puttane
Per la gente normale non c’è un pò di sconto
La legge non è uguale per tutti ( O saje)
Nasciamo e moriamo fottuti ( O saje)
Un ponte ti istiga , dice "ti butti?"
E nel mentre cadi poi tanti saluti
Odio le guardie, le cose le dico in faccia
Porca puttana mannaggia, ero sotto casa 
Si avvicina un SH, pistola nera puntata in faccia 
Cazzo ma è uscita dell' acqua?
Questa pistola non è mica vera, non spara  
'Fratello capisci devo portare mangiare a casa '
Ma come mangiare a casa?
Hai una maglietta di marca, hai un pantalone di Prada
Chi ruba si veste meglio di chi lavora
Questa è l’Italia !
Flow 41 bis, voglio un pò d’aria 
Solo un poco d’aria perché devo pensare
 Dagli sbagli si cresce si matura e impara 
Meglio stare solo a quanto pare 
Ballo moonwalk ma non vado mai indietro
Metto burro saporito viene meglio 
Comodo comodo mi siedo 
Le cose ultimamente me le prendo
non le chiedo, fanculo!

[Ritornello 2: Gianni Red & Loris Bastr]
Non fare il guappo , non fare il guappo!
Parla poco , stai tranquillo , non fare il guappo!
(Scemo!)
Non fare il guappo , non fare il guappo!
Prendi una camomilla , non fare il guappo!
( Fare il guappo?)

[Strofa 2: Gianni Red]
Guappo, mio padre dice :
"Non fare il guappo"
Mia madre dice: "Non fare il guappo"
Ma a volte non lo faccio apposta
Sai è difficile non fare il guappo
In un mondo troppo pieno di guappi
Pure tu inizi a fare il guappo
Ma solo quando ti conviene
Infatti facesti il bravo davanti le guardie
Cambiasti faccia
Cos'è ora non le cacci le palle? Hai paura?
E dai fai questo cambio di marcia, fai una strage
Butta subito le guardie per l' aria e cacccia questa rabbia!
Poi domani mattina su tutti i giornali , non fartene proprio
Poi ti bussano  a casa , di anni devi fartene nove
E già ci stai ripensando,  ho visto , su
Starai pensando: ''Ma che fine di merda,
voglio aspirare a qualcosa di meglio"
Frà non uccido gente
nessuna mitraglietta, nessun Billaden
Fammi fare una vita bella , mangio Vitasnella
Leggo Pirandello , faccio pilates
Dopo mi fumo una sigaretta su un divanetto
La vita di chi vuol star quieto

[Bridge: Loris Bastr]
Tesoro , che succede? Dimmi allora cosa dobbiamo fare?
Tu l' hai fatto sul serio quando ti hanno detto di andar a rubare
Cazzo , hai aggiustato il vetro nuovo , ma dovevi aggiustare la testa
Prima di scendere pieno di te , guarda sempre chi c'è intorno

[Ritornello 3: Gianni Red & Loris Bastr]
Non fare il guappo , non fare il guappo!
Parla poco , stai tranquillo , non fare il guappo!
(Scemo!)
Non fare il guappo , non fare il guappo!
Prendi una camomilla , non fare il guappo!
( Piedi-per-terra)
              `}
            />
          </Route>

          <Route path="/salvini">
            <TestiDetails
              mp3="./songs/salvini.wav"
              data="11/7/2018"
              immagine="./images/cover/salvini.png"
              titolo="Salvini"
              desc={`Gianni Red & Loris Bastr presentano :  Salvini 
              Produzione musicale : I.G Smoke;
              Suoni : Neter Sound;
              Regia : Red Family ;
              Riprese e montaggio : FACTORY; 
              Outfit : Iovine Vintage Store;`}
              spotify="https://goo.gl/d2Wo69"
              testo={`
              [Intro: Loris Bastr]
              Siamo sta- , siamo sta-
              Siamo, siamo stanchi 
              (x2)
              
              [Strofa 1: Loris Bastr]
              Il presidente del consiglio è un mio concittadino 
              Il problema non è tanto lui, ma chi gli sta vicino
               Salvini non lo sa dove vivo, l'aria che respiro
              Vieni ti accogliamo, ti portiamo un pannolino
              Per il governo questa città è un inferno 
              Sbirri che ti picchiano per uno spinello
              Pusher della zona con tremila nel borsello
              Ti fai grande e non distingui questo da quello
              Noi napoletani abbiamo ancora una speranza 
              Credo in questa gente, voglio una rivalsa
              Fanculo il razzismo, questo non basta! 
              Non voglio fare numeri : "Il ballo dell'ambulanza" 
              Tu che vuoi fare? Vuoi stare in questa baracca? 
              Compare l'Italia è uno stivale con eleganza
              Ma a quanto pare frate ultimamente gira scalza
              Rosso sulla traccia , 'sto rosso non è salsa
              Tempo fa hai sparlato del Sud, 
              Ora ti votano al Sud 
              Voi brindate in un Suv
              Napoletano, non come vuoi tu! 
              Non mi butti giù, pure con il tuo crew
              (M fai rirer 'o frà)
              
              [Ritornello: Gianni Red & Loris Bastr]
              Fanculo Salvini, fanculo Salvini
              Fanculo, fanculo Salvini ! 
              (eoooooooo! )
              Fanculo Salvini, fanculo Salvini
              Fanculo, fanculo Salvini ! 
              (hey hey!)
              Fanculo Salvini, fanculo Salvini
              Porta il culo fuori con i tuoi casini!
              (eoooooooo! )
              Fanculo Salvini, fanculo Salvini
              Fanculo, fanculo Salvini ! 
              
              [Strofa 2:Gianni Red]
              Chest è Napule ammò , nu salut carnal
              Uagliò , si nn t' piac cagn pur canal
              T' addivert a ffà cori ncopp a nuje , stai mal?
              Si t mannamm a fancul, vir, è chiù ch' normal!
              Si leghist? Ok, p' nuje va buon
              Simm 'e Napule , ch' cagn? , sta terr è pur a toj
              Mo t' apar a pall , stai facenn o cumpagnon
              Ma primm 'e piglià e vot stiv semp a puntà contr
              E nn' vat rutt 'o cazz e campà r' apparenz? 
              Na parola sol: trasparenz! 
              A fatic è poc, vir log uagliò ch' ce aspett
              Cacciat e pall , nun parlat sulament! 
              Bum, Bam! E colp fann chiù ambress
              Ma nn' è accussì ca se risolvn e guaie, scus eh?! 
              Sto cercann 'e frenà a cazzim,  e chist' at accumenc
              Sto cercann 'e scetà e bellill ch' stann rummen! 
              Boom bap! so cantant! 
              Nn' so politic, nun vogl fà 'o mast
              Sto cuntann sultant chell ch' veg
              Ma chell ch' veg nn' pnsà ca m' o neg
              
              [Ritornello 2: Gianni Red & Loris Bastr]
              Fanculo Salvini, fanculo Salvini
              Fanculo, fanculo Salvini ! 
              (eoooooooo! )
              Fanculo Salvini, fanculo Salvini
              Fanculo, fanculo Salvini ! 
              (hey hey!)
              Fanculo Salvini, fanculo Salvini
              Porta il culo fuori con i tuoi casini!
              (eoooooooo! )
              Fanculo Salvini, fanculo Salvini
              Fanculo, fanculo Salvini ! 
              (hey hey!)
              
                  `}
              traduzione={`
              [Intro: Loris Bastr]
              Siamo sta- , siamo sta-
              Siamo, siamo stanchi 
              (x2)
              
              [Strofa 1: Loris Bastr]
              Il presidente del consiglio è un mio concittadino 
              Il problema non è tanto lui, ma chi gli sta vicino
               Salvini non lo sa dove vivo, l'aria che respiro
              Vieni ti accogliamo, ti portiamo un pannolino
              Per il governo questa città è un inferno 
              Sbirri che ti picchiano per uno spinello
              Pusher della zona con tremila nel borsello
              Ti fai grande e non distingui questo da quello
              Noi napoletani abbiamo ancora una speranza 
              Credo in questa gente, voglio una rivalsa
              Fanculo il razzismo, questo non basta! 
              Non voglio fare numeri : "Il ballo dell'ambulanza" 
              Tu che vuoi fare? Vuoi stare in questa baracca? 
              Compare l'Italia è uno stivale con eleganza
              Ma a quanto pare frate ultimamente gira scalza
              Rosso sulla traccia , 'sto rosso non è salsa
              Tempo fa hai sparlato del Sud, 
              Ora ti votano al Sud 
              Voi brindate in un Suv
              Napoletano, non come vuoi tu! 
              Non mi butti giù, pure con il tuo crew
              (mi fai ridere fratello)
              
              [Ritornello: Gianni Red & Loris Bastr]
              Fanculo Salvini, fanculo Salvini
              Fanculo, fanculo Salvini ! 
              (eoooooooo! )
              Fanculo Salvini, fanculo Salvini
              Fanculo, fanculo Salvini ! 
              (hey hey!)
              Fanculo Salvini, fanculo Salvini
              Porta il culo fuori con i tuoi casini!
              (eoooooooo! )
              Fanculo Salvini, fanculo Salvini
              Fanculo, fanculo Salvini ! 
              
              [Strofa 2: Gianni Red]
              Questa é Napoli amico, un saluto carnale
              Giovane se non ti piace, cambia pure canale
              Ti diverti a fare cori su di noi, stai male?
              Se ti mandiamo a fanculo, vedi, è più che normale!
              Sei leghista? Ok, per noi va bene
              Siamo di Napoli, cosa cambia? Questa terra è pure tua
              Mo ti pari il culo , stai facendo l'amicone
              Ma prima di prendere voti eri sempre a puntare contro
              E non vi siete rotti il cazzo di vivere di apparenze? 
              Una parola sola : trasparenza! 
              Il lavoro è poco, attento giovane a quella che ci spetta
              Cacciate le palle, non parlate soltanto! 
              Bum, Bam! I colpi fanno prima 
              Ma non è cosi che si risolvono i problemi, scusa eh?! 
              Sto cercando di frenare la cazzimma,  ma quest' altro incomincia
              Sto cercando di svegliare i fraccomodi che stanno dormendo! 
              Boom bap! sono cantante! 
              Non sono politico, non voglio fare il maestro
              Sto raccontando soltanto quello che vedo
              Ma quello che vedo non pensare che lo neghi
              
              [Ritornello 2: Gianni Red & Loris Bastr]
              Fanculo Salvini, fanculo Salvini
              Fanculo, fanculo Salvini ! 
              (eoooooooo! )
              Fanculo Salvini, fanculo Salvini
              Fanculo, fanculo Salvini ! 
              (hey hey!)
              Fanculo Salvini, fanculo Salvini
              Porta il culo fuori con i tuoi casini!
              (eoooooooo! )
              Fanculo Salvini, fanculo Salvini
              Fanculo, fanculo Salvini ! 
              (hey hey!)              
              `}
            />
          </Route>

          <Route path="/guardami negli occhi">
            <TestiDetails
              mp3="./songs/guardami-negli-occhi.mp3"
              data="11/5/2018"
              immagine="./images/cover/guardami-negli-occhi.png"
              titolo="Guardami Negli Occhi"
              desc={`Gianni Red & Loris Bastr presentano : Guardami negli occhi
              Suoni : Neter Sound
              Regia : FACTORY`}
              spotify="https://goo.gl/YRhrcV"
              testo={`
              [Intro: Gianni Red & Loris Bastr]
              Hey, ok, ok!
              Voglio parlare con te 
              Voglio parlare con te
              (Ok, ok!)
              Ma non mi guardi 
              (Ok, ok!)
              Ti parlo, ma non mi guardi 
              Perché ti parlo e non mi guardi?
              Ti sto parlando!
              (Eh!)
              Uno, posa quel telefono, brò 
              Guardami negli occhi, oh! 
              (Cazzo!)
              Due, no, non stare sulle tue, col cellulare ognuno sulle sue 
              (Merda!)
              Tre, alza quella testa con me, non fare la fighetta, se!
              (Cazzo!)
              Quattro, compà dei tuoi fottuti messaggini del cazzo, me ne sbatto, se! 
              
              [Ritornello 1: Gianni Red & Loris Bastr]
              Allora posa quella merda 
              (Uh, uh, uh!)
              Guardami negli occhi 
              (Uh, uh, uh!)
              Posa quella merda 
              (Uh, uh, uh!)
              Guardami negli occhi 
              (Uh, uh, uh!)
              Posa-posa-posa quella merda 
              (Uh, uh!)
              Guarda-guarda guardami negli occhi 
              (Uh, uh!)
              Posa-posa-posa quella merda 
              (Uh, uh!)
              Guarda-guarda guardami negli occhi  
              (Uh, uh!)
              
              [Strofa 1: Loris Bastr]
              Io ti dico "Posalo"
              Tu mi dici "Ora no"
              "Altrimenti tutti i miei follower mi ignorano"
              I vecchi fanno selfie, le cose, dai, migliorano 
              Sparlano dei giovani e intanto loro postano
              Amore stasera come ti vesti ?
              ''Scattami una foto, dimmi che ti metteresti''
              Ma sto sbagliando o quegli occhiali blu tu li hai già messi
               ''Credimi sarai il più bello, gli altri tutti cessi''
              I miei brò mi dicono ''Loris guarda là'' 
              Vedo solo una società che cerca di apparire 
              ''Questa foto scartala, questo jeans non mi va'' 
              Se vi ascolto penso ''Cazzo, voglio scomparire"
              Lei si veste come se fosse una sfilata
              Tutta attillata, questa volta non ho niente da dire
              Lei preparata e truccata
              Io e Gianni con la bava
              che sembriamo due cani in un canile 
              
              [Bridge 1: Gianni Red & Loris Bastr]
              Ti sta mangiando con gli occhi 
              (Non lo vedi, amico?!)
              Finto distratto 
              (Fingi col telefonino!)
              Dovresti alzarti e dirle
              (Bambola, mò arrivo!)
              Ma non la guardi, poi a casa 
              (Metti il cuoricino!)
              
              [Ritornello 2: Gianni Red & Loris Bastr]
              E allora posa quella merda 
              (Uh, uh, uh!)
              Guardami negli occhi 
              (Uh, uh, uh!)
              Posa quella merda 
              (Uh, uh, uh!)
              Guardami negli occhi 
              (Uh, uh, uh!)
              Posa-posa-posa quella merda 
              (Uh, uh!)
              Guarda-guarda guardami negli occhi 
              (Uh, uh!)
              Posa-posa-posa quella merda 
              (Uh, uh!)
              Guarda-guarda guardami negli occhi  
              (Uh, uh!)
              
              [Strofa 2: Gianni Red]
              Ammò ramm o' cinq, iamm bast click
              "Cagn vit" è nu cunsigl, ma nn' capisc e cagn SIM
              Tras 'e sicc, iesc 'e chiatt, iesc a llà "Statt zitt!"
              Pesc mmà parl primm, quann e dopp mann e' GIF
              Tuff a cannellicchij ndo puzz re nceppat
              A gar a chi fa chiù o' strunz, vuj a nummr a ch' stat?
              “Uagliò ma faj na fot? " marò nun m' appstat pecchè 
              Nun m' fir proprij 'e vrè o' munn azzccat
              E jamm nun fà o' scustumat
              Mentr sto parlann acal a' cap scunsulat
              Tant re messagg e' det sann cunsumat
              Truov o poc e pac, a vuò na barr e ciucculat?
              (Nguè!)
              E uardm nda l' uocchj
              Nn' uardà asott, ca t' adduorm
              Uard l' uocchj, uard l' uocchj
              Nn' uardà asott
              Ch' t' sfong, eh!
              E uardm nda l' uocchj
              Nn' uardà asott, ca t' adduorm
              Uard l' uocchj, uard l' uocchj
              Nn' uardà asott
              Ch' t' sfong, eh!
              
              [Bridge 2: Gianni Red & Loris Bastr]
              Ti sta mangiando con gli occhi 
              (Non lo vedi, amico?!)
              Finto distratto 
              (Fingi col telefonino!)
              Dovresti alzarti e dirle
              (Bambola, mò arrivo!)
              Ma non la guardi e poi a casa 
              (Metti il cuoricino!)
              
              [Ritornello 3: Gianni Red & Loris Bastr]
              E allora posa quella merda 
              (Uh, uh, uh!)
              Guardami negli occhi 
              (Uh, uh, uh!)
              Posa quella merda 
              (Uh, uh, uh!)
              Guardami negli occhi 
              (Uh, uh, uh!)
              Posa-posa-posa quella merda 
              (Uh, uh!)
              Guarda-guarda guardami negli occhi 
              (Uh, uh!)
              Posa-posa-posa quella merda 
              (Uh, uh!)
              Guarda-guarda guardami negli occhi  
              (Uh, uh!)
              
                  `}
              traduzione={`
              [Intro: Gianni Red & Loris Bastr]
              Hey, ok, ok!
              Voglio parlare con te 
              Voglio parlare con te
              (Ok, ok!)
              Ma non mi guardi 
              (Ok, ok!)
              Ti parlo, ma non mi guardi 
              Perché ti parlo e non mi guardi?
              Ti sto parlando!
              (Eh!)
              Uno, posa quel telefono, brò 
              Guardami negli occhi, oh! 
              (Cazzo!)
              Due, no, non stare sulle tue, col cellulare ognuno sulle sue 
              (Merda!)
              Tre, alza quella testa con me, non fare la fighetta, se!
              (Cazzo!)
              Quattro, compà dei tuoi fottuti messaggini del cazzo, me ne sbatto, se! 
              
              [Ritornello 1: Gianni Red & Loris Bastr]
              Allora posa quella merda 
              (Uh, uh, uh!)
              Guardami negli occhi 
              (Uh, uh, uh!)
              Posa quella merda 
              (Uh, uh, uh!)
              Guardami negli occhi 
              (Uh, uh, uh!)
              Posa-posa-posa quella merda 
              (Uh, uh!)
              Guarda-guarda guardami negli occhi 
              (Uh, uh!)
              Posa-posa-posa quella merda 
              (Uh, uh!)
              Guarda-guarda guardami negli occhi  
              (Uh, uh!)
              
              [Strofa 1: Loris Bastr]
              Io ti dico "Posalo"
              Tu mi dici "Ora no"
              "Altrimenti tutti i miei follower mi ignorano"
              I vecchi fanno selfie, le cose, dai, migliorano 
              Sparlano dei giovani e intanto loro postano
              Amore stasera come ti vesti ?
              ''Scattami una foto, dimmi che ti metteresti''
              Ma sto sbagliando o quegli occhiali blu tu li hai già messi
               ''Credimi sarai il più bello, gli altri tutti cessi''
              I miei brò mi dicono ''Loris guarda là'' 
              Vedo solo una società che cerca di apparire 
              ''Questa foto scartala, questo jeans non mi va'' 
              Se vi ascolto penso ''Cazzo, voglio scomparire"
              Lei si veste come se fosse una sfilata
              Tutta attillata, questa volta non ho niente da dire
              Lei preparata e truccata
              Io e Gianni con la bava
              che sembriamo due cani in un canile 
              
              [Bridge 1: Gianni Red & Loris Bastr]
              Ti sta mangiando con gli occhi 
              (Non lo vedi, amico?!)
              Finto distratto 
              (Fingi col telefonino!)
              Dovresti alzarti e dirle
              (Bambola, mò arrivo!)
              Ma non la guardi, poi a casa 
              (Metti il cuoricino!)
              
              [Ritornello 2: Gianni Red & Loris Bastr]
              E allora posa quella merda 
              (Uh, uh, uh!)
              Guardami negli occhi 
              (Uh, uh, uh!)
              Posa quella merda 
              (Uh, uh, uh!)
              Guardami negli occhi 
              (Uh, uh, uh!)
              Posa-posa-posa quella merda 
              (Uh, uh!)
              Guarda-guarda guardami negli occhi 
              (Uh, uh!)
              Posa-posa-posa quella merda 
              (Uh, uh!)
              Guarda-guarda guardami negli occhi  
              (Uh, uh!)
              
              [Strofa 2: Gianni Red]
              Amico dammi il cinque, dai basta click
              "Cambia vita" è un consiglio, ma non capisci e cambi SIM
              Entri snello(con discrezione), esci obeso (da padrone),allontanati "Stai zitto!"
              Mezza sega parla prima, più tardi mandi GIF
              Tuffo a candela nel pozzo degli inceppati
              La gara a chi fa più lo stronzo, voi a che numero state?
              “Giovane mi fai una foto?'' Madonna, non mi appestate
              Perchè non ce la faccio proprio a vedere il mondo rovinato
              E dai non fare lo scostumato
              Mentre sto parlando abbassi la testa sconsolato
              Talmente messaggi che le dita si sono consumate
              Trova un pò di pace, vuoi una barretta di cioccolato?
              (Nguè!)
              E guardami negli occhi
              Non guardare sotto perchè ti addormenti
              Guarda gli occhi, guarda gli occhi
              Non guardare sotto
              Che ti sfondo, eh!
              E guardami negli occhi
              Non guardare sotto perchè ti addormenti
              Guarda gli occhi, guarda gli occhi
              Non guardare sotto
              Che ti sfondo, eh!
              
              [Bridge 2: Gianni Red & Loris Bastr]
              Ti sta mangiando con gli occhi 
              (Non lo vedi, amico?!)
              Finto distratto 
              (Fingi col telefonino!)
              Dovresti alzarti e dirle
              (Bambola, mò arrivo!)
              Ma non la guardi e poi a casa 
              (Metti il cuoricino!)
              
              [Ritornello 3: Gianni Red & Loris Bastr]
              E allora posa quella merda 
              (Uh, uh, uh!)
              Guardami negli occhi 
              (Uh, uh, uh!)
              Posa quella merda 
              (Uh, uh, uh!)
              Guardami negli occhi 
              (Uh, uh, uh!)
              Posa-posa-posa quella merda 
              (Uh, uh!)
              Guarda-guarda guardami negli occhi 
              (Uh, uh!)
              Posa-posa-posa quella merda 
              (Uh, uh!)
              Guarda-guarda guardami negli occhi  
              (Uh, uh!)              
              `}
            />
          </Route>

          <Route path="/stai con me">
            <TestiDetails
              mp3="./songs/stai-con-me.mp3"
              data="11/5/2018"
              immagine="./images/cover/stai-con-me.png"
              titolo="Stai Con Me"
              desc={`Gianni Red & Loris Bastr presentano : Guardami negli occhi
              Suoni : Neter Sound
              Regia : FACTORY`}
              spotify="https://goo.gl/YRhrcV"
              testo={`
              [Intro: Loris Bastr]
              Ok, ok , ok
              Red Family, premi play !
              Ok, ok , ok
              Red Family, premi play !
              (Sembrava impossibile, ma ce l’ abbiamo fatta! )
              
              [Ritornello 1: Gianni Red & Loris Bastr]
              Ok, frate'  guarda bene sto qua sotto
              Scendi, presto muoviti , non fare il cagasotto
              Tua mamma parla da lontano, sai che non l’ ascolto 
              Red family, sai che vedo tutto rosso!
              Uagliò , uagliò , uagliò
              Ma pigl pall e pesc mmò 
              Uagliò , uagliò , uagliò
              Devi divertirti un pò
              Tu stai con me, stai con me, stai con me 
              Tu stai con me, stai con me, stai con me 
              Tu fammi 'ue', fammi 'ue', fammi 'ue'
              Tu stai con me, stai con me, stai con me 
              
              [Strofa 1: Loris Bastr]
              Amore sei sempre a casa, strano 
              Ma cosa fai a casa a parte il pesce in mano ?
              Non ti muovi, il tuo culo ha la forma del divano 
              e in tutto questo mamma dice ''non fare baccano ''
              Scendi cazzo! Stiamo io e Gianni 
              Amico quegli occhiali non li levi da vent' anni 
              Dai ci manca solo che tu giochi con le Barbie
              Se te ne fumi una tu  ti appaci come Ghandi!
              Hey-yo  fratello come butta ?
              Leva quel maglione slabbrato, metti una tuta 
              Fotti una colombiana da 'higo de puta' 
              Tua mamma si lamenta, mandala a fanculo 
              Siamo noi la via di fuga 
              Dillo in giro che frequenti sempre Loris bastr 
              Si quello che indossa solo un paio di Vans 
              Giuro che ti blocco se vai dai trans 
              Non sai dove ti porto 
              ( E ja o' Lò e bast! )
              
              [Ritornello 2: Gianni Red & Loris Bastr]
              Ok, frate'  guarda bene sto qua sotto
              Scendi, presto muoviti , non fare il cagasotto
              Tua mamma parla da lontano, sai che non l’ ascolto 
              Red family, sai che vedo tutto rosso!
              Uagliò , uagliò , uagliò
              Ma fa nu poc poc l' omm!
              Uagliò , uagliò , uagliò
              Devi divertirti un pò !
              Tu stai con me, stai con me, stai con me 
              Tu stai con me, stai con me, stai con me 
              Tu fammi 'ue', fammi 'ue', fammi 'ue'
              Tu stai con me, stai con me, stai con me 
              
              [Strofa 2: Gianni Red]
              Piacer e  già t' facc e compliment
              Nun t' agg mai vist 'e fà nu moviment
              Si faciss a gar a chi s' mov 'e men :
              'o primm post rind a tutt 'e continent
              Jamm scitet nu poc , si! Vivet na cos , si!
              T' vogl chiù convincent!
              Firmt cu cocc amic , circt na porc, si !
              Crirm che dopp è tutt godiment
              Miettc o poc e furtun “coccinell” 
              Miettc n' a ppoc e furtun “coincidenz “
              Jamm c' stai quas  sul cocc accorgiment
              E pò si che purtat tutt cos a compiment
              Jamm , uard mo stai appost, si!
              Uard m' stai fort o cì !
              Ua ma chi si Johnny Depp?
              C' cià putiv fà già 'o dicett
              Ma nun è ca frà mò vuliss fà 'o tipett?
              
              [Ritornello 3: Gianni Red & Loris Bastr]
              Uagliò , uagliò , uagliò
              Ma pigl pall e pesc mmò !
              Uagliò , uagliò , uagliò
              Devi divertirti un pò!
              Tu stai con me, stai con me, stai con me 
              Tu stai con me, stai con me, stai con me 
              Tu fammi 'ue', fammi 'ue', fammi 'ue'
              Tu stai con me, stai con me, stai con me               
                  `}
              traduzione={`
              [Intro: Loris Bastr]
              Ok, ok , ok
              Red Family, premi play !
              Ok, ok , ok
              Red Family, premi play !
              (Sembrava impossibile, ma ce l’ abbiamo fatta! )
              
              [Ritornello 1: Gianni Red & Loris Bastr]
              Ok, frate'  guarda bene sto qua sotto
              Scendi, presto muoviti , non fare il cagasotto
              Tua mamma parla da lontano, sai che non l’ ascolto 
              Red family, sai che vedo tutto rosso!
              Giovane, giovane, giovane
              Ma prendi cazzo e palle in bocca
              Giovane, giovane, giovane
              Devi divertirti un pò
              Tu stai con me, stai con me, stai con me 
              Tu stai con me, stai con me, stai con me 
              Tu fammi 'ue', fammi 'ue', fammi 'ue'
              Tu stai con me, stai con me, stai con me 
              
              [Strofa 1: Loris Bastr]
              Amore sei sempre a casa, strano 
              Ma cosa fai a casa a parte il pesce in mano ?
              Non ti muovi, il tuo culo ha la forma del divano 
              e in tutto questo mamma dice ''non fare baccano ''
              Scendi cazzo! Stiamo io e Gianni 
              Amico quegli occhiali non li levi da vent' anni 
              Dai ci manca solo che tu giochi con le Barbie
              Se te ne fumi una tu  ti appaci come Ghandi!
              Hey-yo  fratello come butta ?
              Leva quel maglione slabbrato, metti una tuta 
              Fotti una colombiana da 'higo de puta' 
              Tua mamma si lamenta, mandala a fanculo 
              Siamo noi la via di fuga 
              Dillo in giro che frequenti sempre Loris bastr 
              Si quello che indossa solo un paio di Vans 
              Giuro che ti blocco se vai dai trans 
              Non sai dove ti porto 
              ( E dai Loris basta! )
              
              [Ritornello 2: Gianni Red & Loris Bastr]
              Ok, frate'  guarda bene sto qua sotto
              Scendi, presto muoviti , non fare il cagasotto
              Tua mamma parla da lontano, sai che non l’ ascolto 
              Red family, sai che vedo tutto rosso!
              Giovane, giovane, giovane
              Ma fai un pò l' uomo!
              Giovane, giovane, giovane
              Devi divertirti un pò !
              Tu stai con me, stai con me, stai con me 
              Tu stai con me, stai con me, stai con me 
              Tu fammi 'ue', fammi 'ue', fammi 'ue'
              Tu stai con me, stai con me, stai con me 
              
              [Strofa 2: Gianni Red]
              Piacere e già ti faccio i complimenti
              Non ti ho mai visto fare un movimento
              Se tu facessi la gara a chi  si muove meno:
              il primo posto in tutti i continenti
              Dai svegliati un pò, si! Sorseggia qualcosa, si!
              Ti voglio più convincente!
              Fermati con qualche amico, cercati una donna, si !
              Credimi che dopo , è tutto godimento!
              Mettici un pò di fortuna “coccinelle” 
              Mettici un altro pò di fortuna “coincidenze “
              Dai ci sei quasi , solo qualche accorgimento
              e poi si che hai portato tutto a compimento
              Dai , guarda ora sei a posto, si!
              Guarda come sei forte , si!
              Wow, ma chi sei Johnny Depp?
              Che potevi farcela già lo dissi
              Ma non è che ora vorresti fare il tipett
              
              [Ritornello 3: Gianni Red & Loris Bastr]
              Giovane, giovane, giovane
              Ma prendi cazzo e palle in bocca
              Giovane, giovane, giovane
              Devi divertirti un pò
              Tu stai con me, stai con me, stai con me 
              Tu stai con me, stai con me, stai con me 
              Tu fammi 'ue', fammi 'ue', fammi 'ue'
              Tu stai con me, stai con me, stai con me              
              `}
            />
          </Route>

          <Route path="/un euro in piu'">
            <TestiDetails
              mp3="./songs/un-euro-in-piu.mp3"
              data="11/03/2018"
              immagine="./images/cover/un-euro-in-piu.png"
              titolo="Un euro in piu'"
              desc={`Gianni Red & Loris Bastr presentano : Un euro in più
              Suoni : Neter Sound
              Regia : Renato Bobyes`}
              spotify="https://goo.gl/6v6pXY"
              testo={`
              [Intro: Loris Bastr]
              Entro dentro un posto, cerco un posto di lavoro 
              ''Siete in cerca di qualcuno di parola e che sia uomo?
              Piacere mi presento sono giovane e nuovo 
              Non vorrei però  fare solo la prova del cuoco" 
              Loro dicono "tranquillo, devi stare buono" 
              Che l’inizio é duro ma col tempo potrai fare molto 
              Che guadagno cento a settimana 
              "Come cento, spero più ! "
              Dimmelo su !
              (E che ti posso dare un’euro  in più )
              (Com’é?) 
              
              [Ritornello 1: Gianni Red & Loris Bastr]
              Un euro in più !
              (Ma-ma-ma ma comm? Ma-ma-ma ma comm?)
              Un euro in più !
              (Ma-ma-ma ma comm? Ma-ma-ma ma comm?)
              Un euro in più !
              (Ma-ma-ma ma comm? Ma-ma-ma ma comm?)
              Un euro in più !
              (Ma-ma-ma ma comm? Ma-ma-ma ma comm?)
              
              [Strofa 1 : Loris Bastr]
              Brò quando lavoro sembro Ed Sheraan 
              Tanto con o senza gli euro non c' ho mai una lira 
              Vivo come uno sfigato, finto messo in riga 
              Il mio capo non mi paga dice "hai una siga?" 
              (No, no!)
              Sembro un vero rapper, ma faccio il lavapiatti 
              Ma spero di svoltare con i risultati esatti 
              Domenica? Eurobet : é li che inizia il party 
              E perdo per una squadra, ammazzo tutti quanti 
              Tanto questa vita me lo mette in culo 
              Io amo la nutella come il piccolo Lucio 
              Il mio amico non lavora rapina qualcuno 
              Ma quando va in caserma é il primo a gridare aiuto 
              Di notte sogno il mio capo con un fucile 
              Poi mi sveglio e dico ''cazzo devo dormire'' 
              Queste sono cose che non puoi capire 
              Lavo troppi piatti fino a non finire 
              Tanto oggi vali per quanto spendi 
              Le mie palle volano come nel tennis 
              Padroni posticipano sempre stipendi
              Ti usano, ti lamenti e poi non ti difendi?
              
              [Ritornello 2: Gianni Red & Loris Bastr]
              (Com’é?) 
              Un euro in più !
              (Ma-ma-ma ma comm? Ma-ma-ma ma comm?)
              Un euro in più !
              (Ma-ma-ma ma comm? Ma-ma-ma ma comm?)
              Un euro in più !
              (Ma-ma-ma ma comm? Ma-ma-ma ma comm?)
              Un euro in più !
              (Ma-ma-ma ma comm? Ma-ma-ma ma comm?)
              
              [Strofa 2: Gianni Red]
              Cerco na fatic ch' m' aiut , no m' accir
              Cerc e p' trament a trov pur mor accis
              "Ma a fatic cà ce stà !" , tutt moralist !
              Parl chi nda vit ha fatt sul o' portapizz
              Nient contr a iss , cumpà pur ij magg' rutt o' mazz
              Ma sta vit e chi s'accuntent e bast ma rutt o' cazz
              Nu stipendio a Napule m' ntusscass , vummcass
              Cient eur a semman? "oh, fuss cazz!  Nun m' bast !"
              E vot pens a chi nasc ca cammis
              Nun ten problem e camp t' accanit 
              O' pan a chi nun ten e rient , mò mo veg ij
              "Comm t chiamm? Ja ", famm fà nu poc 'o lecchin
              Fatt e' cart e vol , iamma part 'e for
              Vogl girà 'o munn comm' a Marco Polo
              Ma comm facc senza sord e senza magnà?
              Ma o' saj so napulitan e port e' marenn ra cas
              C' arrangiamm semp pur si sò tiemp tuost
              Cagn e' cos mò , nn' aspettà ca addivient ruoss
              Mentr staj aspettan o' stat mic t' rimbors
              E lat nun t' aspettn e o' contrarj pigln a rincors
              Succ ro discors, scigl chell ca t' piac
              Cca 'o schiattat nguorp rischj semp ca nn' t' pav
              P' chest facc rap ,pecchè sacc ca m piac
              Ma aspiett n' attim , ma quann m' pav?
              
              [Ritornello 3: Gianni Red & Loris Bastr]
              (Com’é?) 
              Un euro in più !
              (Ma-ma-ma ma comm? Ma-ma-ma ma comm?)
              Un euro in più !
              (Ma-ma-ma ma comm? Ma-ma-ma ma comm?)
              Un euro in più !
              (Ma-ma-ma ma comm? Ma-ma-ma ma comm?)
              Un euro in più !
              (Ma-ma-ma ma comm? Ma-ma-ma ma comm?)
               
                  `}
              traduzione={`
              [Intro: Loris Bastr]
              Entro dentro un posto, cerco un posto di lavoro 
              ''Siete in cerca di qualcuno di parola e che sia uomo?
              Piacere mi presento sono giovane e nuovo 
              Non vorrei però  fare solo la prova del cuoco" 
              Loro dicono "tranquillo, devi stare buono" 
              Che l’inizio é duro ma col tempo potrai fare molto 
              Che guadagno cento a settimana 
              "Come cento ,  spero più ! "
              Dimmelo su !
              (E che ti posso dare un’euro  in più )
              (Com’é?) 
              
              [Ritornello 1: Gianni Red & Loris Bastr]
              Un euro in più !
              (Ma-ma-ma ma come? Ma-ma-ma ma come?)
              Un euro in più !
              (Ma-ma-ma ma come? Ma-ma-ma ma come?)
              Un euro in più !
              (Ma-ma-ma ma come? Ma-ma-ma ma come?)
              Un euro in più !
              (Ma-ma-ma ma come? Ma-ma-ma ma come?)
              
              [Strofa 1 : Loris Bastr]
              Fratello, quando lavoro sembro Ed Sheraan 
              Tanto con o senza gli euro non c' ho mai una lira 
              Vivo come uno sfigato, finto messo in riga 
              Il mio capo non mi paga dice "hai una siga?" 
              (No, no!)
              Sembro un vero rapper, ma faccio il lavapiatti 
              Ma spero di svoltare con i risultati esatti 
              Domenica? Eurobet : é li che inizia il party 
              E perdo per una squadra, ammazzo tutti quanti 
              Tanto questa vita me lo mette in culo 
              Io amo la nutella come il piccolo Lucio 
              Il mio amico non lavora rapina qualcuno 
              Ma quando va in caserma é il primo a gridare aiuto 
              Di notte sogno il mio capo con un fucile 
              Poi mi sveglio e dico ''cazzo, devo dormire'' 
              Queste sono cose che non puoi capire 
              Lavo troppi piatti fino a non finire 
              Tanto oggi vali per quanto spendi 
              Le mie palle volano come nel tennis 
              Padroni posticipano sempre stipendi
              Ti usano, ti lamenti e poi non ti difendi?
              
              [Ritornello 2: Gianni Red & Loris Bastr]
              (Com’é?) 
              Un euro in più !
              (Ma-ma-ma ma come? Ma-ma-ma ma come?)
              Un euro in più !
              (Ma-ma-ma ma come? Ma-ma-ma ma come?)
              Un euro in più !
              (Ma-ma-ma ma come? Ma-ma-ma ma come?)
              Un euro in più !
              (Ma-ma-ma ma come? Ma-ma-ma ma come?)
              
              [Strofa 2: Gianni Red]
              Cerco un lavoro che mi aiuti , non mi uccida
              Cerco e nel frattempo lo trovo muoio pure
              "Ma il lavoro qui c'è!" , tutti moralisti !
              Parla chi nella vita ha fatto solo il portapizze
              Niente contro di lui, amico pure io mi sono rotto il culo
              Ma questa vita di chi si accontenta e basta mi ha rotto il cazzo
              Uno stipendio a Napoli mi intossicherebbe , vomiterei
              Cento euro a settimana? "oh, ti piacerebbe! Non mi basta!"
              A volte penso a chi nasce con la camicia
              Non ha problemi e vive molto accanito
              Il pane a chi non ha i denti , ora ci penso io
              "Come ti chiami? Dai ", fammi fare un pò il lecchino
              Fatti le carte di volo, andiamo da qualche parte fuori 
              Voglio girare il mondo come Marco Polo
              Ma come faccio senza soldi e senza mangiare?
              Ma lo sai sono napoletano e porto i panini da casa
              Ci arrangiamo sempre anche se sono tempi duri
              Cambia le cose ora, non aspettare che diventi grande
              Mentre stai aspettando lo stato mica ti rimborsa
              E gli altri non ti aspettano e al contrario prendono la rincorsa!
              Succo del discorso, scegli quello che ti piace
              Che ciò che è controvoglia rischi sempre che non ti paga
              Per questo faccio rap, perchè so che mi piace
              Ma aspetta un attimo, ma quando mi paga?
              
              [Ritornello 3: Gianni Red & Loris Bastr]
              (Com’é?) 
              Un euro in più !
              (Ma-ma-ma ma come? Ma-ma-ma ma come?)
              Un euro in più !
              (Ma-ma-ma ma come? Ma-ma-ma ma come?)
              Un euro in più !
              (Ma-ma-ma ma come? Ma-ma-ma ma come?)
              Un euro in più !
              (Ma-ma-ma ma come? Ma-ma-ma ma come?)              
              `}
            />
          </Route>

          <Route path="/T' Magnat">
            <TestiDetails
              mp3="./songs/t-magnat.mp3"
              data="20/02/2019"
              immagine="./images/cover/t-magnat.png"
              titolo="T' Magnat"
              desc={`Gianni Red & Loris Bastr presentano : T' Magnat
              Suoni : Neter Sound
              Regia : Marco Bruno`}
              spotify="https://open.spotify.com/track/57o6EZaVkzq3MiKymHNyqk?autoplay=true"
              testo={`
              [Ritornello: Gianni Red & Loris Bastr]
              E pall chien, teng a uallera 'nderr
              (Crirem, crirem)
              Sa-sacc buon c' song e saittell 
              (Ne, ne)
              Sord cuntat rind a sacc e me speng
              (Girt, girt)
              C' ogni cristian cagg' a che fa me fraintend 
              (Bang, bang ,bang!)
              Arap l' uocchie log stann t' magnat
              (Fratm, fratm)
              Stai cu na faccia a pest rimm che passat 
              (Uanm, uanm)
              Arap l' uocchie log stann t' magnat 
              (Fratm, fratm)
              Stai cu na faccia a pest rimm che passat 
              (Ma ch'e fatt?)
              
              [Strofa 1: Gianni Red]
              Ammò teng e pall chien
              Stat t' magnat ma n' iat fier
              Parlavn 'e success c' m par aier
              Mo vat arravugliat buon man e pier
              I magg' arravugliat overament ma nun è c' mo nascong 
              O dico apertament facc' o camerier
              Mic comm' e' chisti muort e famm 
              C' m parln 'e puttan e d' renar ma 'e t' chest nn' fann nient
              O' rap mi nascev già tr' e' banc 'e scol
              Chierl e' cumpagn mi n' sann 'e storj
              O' teng rind o' sang, rind o' DNA
              Comme sti puttane quann' fann e' corn
              P' fà o' figl 'e bucchin l' issa vattr bon
              M' piace a malavit pcchè a cap nn' m' apport
              Cuginm m' facett vrè o' fierr
              E ra llà ricett a chiavass na bott
              Ma qual bott, ja fà o' brav!
              Nun fà o' fort ch' a pò 'o pav!
              So a' cuscienz toj: n' avvocat
              O' sentier tuoj é calcolat
              Megl' na magnata o' Lago Patria
              Ca te fann' na puntat a Quarto Grado
              Gianni, o' mal t' appasionat
              Ma to dic nn' fà p te, è assodat!
              P' chest c' facc rap
              Frà nun o vir ch' facc teng
              P' o' rap m accir so pazz , né
              Comm nde film cu Schwarzenegger
              E tu parlam parlam 'e quant stann magnat t' quant ggià 'o saj 
              (ggià 'o saj , ggià 'o saj )
              Fratm, fratm lavt a' facc ma si a tien a pest é nu guaie
              
              [Ritornello 2: Gianni Red & Loris Bastr]
              E pall chien, teng a uallera 'nderr 
              (Crirm, crirm)
              Sa-sacc buon c' song e saittell 
              (Ne, ne)
              Sord cuntat rind a sacc e me speng
              (Girt, girt)
              C' ogni cristian cagg' a che fa me fraintend
              (Bang, bang, bang!)
              Arap l' uocchie log stann t' magnat 
              (Fratm, fratm)
              Stai cu na faccia a pest rimm che passat 
              (Uanm, uanm)
              Arap l' uocchie log stann t' magnat
              (Fratm, fratm)
              Stai cu na faccia a pest rimm che passat 
              (O magnà)
              
              [Strofa 2: Loris Bastr]
              Non ho mai leccato un culo
              Per questo non sono ancora nessuno
              Perché quando parlo non mi capisci
              Mi vorrebbero ordinato coi capelli lisci
              Ho mandato a fare in culo certi meccanismi
              Perché se apro gli occhi vedo esibizionisti
              Hai fatto una foto con una Ferrari, 
              Hai preso mille like
              Peccato che il Ferrari non ce l'hai
              Quest'anno poi l' hai preso in culo
              L'anno prossimo ti rifarai
              Tesoro i tipi come te li butto nei pollai
              Voglio fare un cacatone per voi talmente grande 
              Giuro ve lo dedico col cuore
              Spegnete queste belle candeline, esprimete un desiderio,
              Fate presto prima che si sente il tanfone
              Hai preso una macchina a leasing
              Anelli sulle mani, iniziali incise
              Uomini e donne, cuori felici
              Mano nella mano ma non siamo a Parigi
              (Ohh par o' pesc, pesc mmà)
              Calci nelle palle tutti puniti
              Non mi ispiro né a 2Pac né a Biggie
              Ma al numero uno Massimo Troisi
              Amico mio forse è meglio che sto nel deserto
              Come un fottuto cammello
              Ho detto a Gianni alziamo il livello
              Flow macellaio ti apro, vitello
              Dimmi quanto vali, quanti soldi mi regali
              Eri li che l' aspettavi, ma solo preliminari
              Io mai stato alla pari, alla faccia dei mangiati
              Bevo Red Bull, mi mette le ali
              
              [Ritornello 3: Gianni Red & Loris Bastr]
              E pall chien, teng a uallera 'nderr
              (Crirm, crirm)
              Sa-sacc buon c' song e saittell 
              (Ne, ne)
              Sord cuntat rind a sacc e me speng
              (Girt, girt)
              C' ogni cristian cagg' a che fa me fraintend 
              (Bang, bang ,bang!)
              Arap l' uocchie log stann t' magnat
               (Fratm, fratm)
              Stai cu na faccia a pest rimm che passat 
              (Uanm, uanm)
              Arap l' uocchie log stann t' magnat 
              (Fratm, fratm)
              Stai cu na faccia a pest rimm che passat 
              
              [Outro: Gianni Red]
              Rir , rir , rir ogni tant
              Putiss rirer ogni tant
              Rir , rir , rir ogni tant
              Putiss rirer ogni tant
              E rir , nun fà o' magnat , ammò
              
              `}
              traduzione={`
              [Ritornello: Gianni Red & Loris Bastr]
              Le palle piene, ho i coglioni per terra
              (Credimi, Credimi)
              So-so bene cosa sono le fogne
              (ok, ok)
              Soldi contati in tasca e li spendo
               (Girati, Girati)
              Con ogni cristiano con cui ho a che fare mi fraintendo
              (Bang, bang ,bang!)
              Apri gli occhi , qua stanno 'tutti mangiati'
              (Fratello, Fratello)
              Stai con una faccia 'a peste', dimmi che hai passato
              (Diamine, Diamine)
              Apri gli occhi , qua stanno 'tutti mangiati'
              (Fratello, fratello)
              Stai con una faccia 'a peste', dimmi che hai passato
              (Ma che hai fatto?)
              
              [Strofa 1: Gianni Red]
              Fratello ho le palle piene
              State 'tutti mangiati' , ma ne andate fieri
              Parlavate di successo che sembrava ieri
              Ora vi siete legati bene mani e piedi
              Io mi sono 'legato' veramente ma non lo nascondo, 
              Lo dico apertamente, faccio il cameriere
              Mica come questi morti di fame
              Che mi parlano di puttane e di denaro , 
              ma di tutto ciò non fanno nulla
              Il mio rap nasceva già tra i banchi di scuola
              Chiedilo ai miei compagni , ne conoscono di storie
              Ce l' ho nel sangue , nel DNA
              Come queste puttane quando fanno le corna
              Per fare il figlio di puttana la dovresti picchiare bene
              Mi piace la malavita perchè la testa non mi funziona
              Mio cugino mi fece vedere una pistola
              E da lì in poi dissi  ''Lo sparerei un colpo''
              Ma quale colpo, su , fa il bravo!
              Non fare il duro che poi la paghi!
              Sono la tua coscienza: un avvocato
              il tuo sentiero è calcolato
              Meglio una mangiata al Lago Patria 
              piuttosto che ti fanno un puntata a Quarto Grado
              Gianni, il male ti ha appassionato
              Ma ti dico ''Non fa per te'', è assodato !
              Per questo che faccio rap
              Fratello non lo vedi che faccia ho 
              Per il rap mi uccido, sono pazzo, ok?
              Come nei film con Schwarzenegger
              E tu parlami parlami di quanto stanno mangiati tutti quanti , già lo sai
              (Già lo sai, Già lo sai)
              Fratello , fratello , lavati la faccia , ma se la hai 'a peste' è un guaio!
              
              [Ritornello 2: Gianni Red & Loris Bastr]
              Le palle piene, ho i coglioni per terra
              (Credimi, Credimi)
              So-so bene cosa sono le fogne
              (ok, ok)
              Soldi contati in tasca e li spendo
              (Girati, Girati)
              Con ogni cristiano che ho a che fare mi fraintendo
              (Bang, bang ,bang!)
              Apri gli occhi , qua stanno 'tutti mangiati'
               (Fratello, Fratello)
              Stai con una faccia a peste, dimmi che hai passato
              (Diamine, Diamine)
              Apri gli occhi , qua stanno 'tutti mangiati'
              (Fratello, fratello)
              Stai con una faccia a peste, dimmi che hai passato
              (Ma che hai fatto?)
              
              [Strofa 2: Loris Bastr]
              Non ho mai leccato un culo
              Per questo non sono ancora nessuno
              Perché quando parlo non mi capisci
              Mi vorrebbero ordinato coi capelli lisci
              Ho mandato a fare in culo certi meccanismi
              Perché se apro gli occhi vedo esibizionisti
              Hai fatto una foto con una Ferrari, 
              Hai preso mille like
              Peccato che il Ferrari non ce l'hai
              Quest'anno poi l' hai preso in culo
              L'anno prossimo ti rifarai
              Tesoro i tipi come te li butto nei pollai
              Voglio fare un cacatone per voi talmente grande 
              Giuro ve lo dedico col cuore
              Spegnete queste belle candeline, esprimete un desiderio,
              Fate presto prima che si sente il tanfone
              Hai preso una macchina a leasing
              Anelli sulle mani, iniziali incise
              Uomini e donne, cuori felici
              Mano nella mano ma non siamo a Parigi
              (ohh sembri il cazzo, mezza sega)
              Calci nelle palle tutti puniti
              Non mi ispiro né a 2Pac né a Biggie
              Ma al numero uno Massimo Troisi
              Amico mio forse è meglio che sto nel deserto
              Come un fottuto cammello
              Ho detto a Gianni alziamo il livello
              Flow macellaio ti apro, vitello
              Dimmi quanto vali, quanti soldi mi regali
              Eri li che l' aspettavi, ma solo preliminari
              Io mai stato alla pari, alla faccia dei mangiati
              Bevo Red Bull, mi mette le ali
              
              [Ritornello 3: Gianni Red & Loris Bastr]
              Le palle piene, ho i coglioni per terra
              (Credimi, Credimi)
              So-so bene cosa sono le fogne
              (ok, ok)
              Soldi contati in tasca e li spendo
              (Girati, Girati)
              Con ogni cristiano che ho a che fare mi fraintendo
              (Bang, bang ,bang!)
              Apri gli occhi , qua stanno 'tutti mangiati'
               (Fratello, Fratello)
              Stai con una faccia a peste, dimmi che hai passato
              (Diamine, Diamine)
              Apri gli occhi , qua stanno 'tutti mangiati'
              (Fratello, fratello)
              Stai con una faccia a peste, dimmi che hai passato
              
              [Outro: Gianni Red]
              Ridi , ridi , ridi ogni tanto
              Potresti ridere ogni tanto !
              Ridi , ridi , ridi ogni tanto
              Potresti ridere ogni tanto !
              E ridi , non fare il 'mangiato', fratello
              
              `}
            />
          </Route>

          <Route path="/amore e soldi no!">
            <TestiDetails
              mp3="./songs/amore-e-soldi.mp3"
              data="11/02/2018"
              immagine="./images/cover/amore-e-soldi.png"
              titolo="Amore e soldi? No!"
              desc={`Gianni Red & Loris Bastr presentano : Amore e Soldi ? No !
              Suoni : Neter Sound
              Regia : Renato Bobyes
              Con la partecipazione di Marialaura Iovino`}
              spotify="https://goo.gl/hyq3hR"
              testo={`
              [Intro]
              No, no, no, no!
              No, no !
              Yeah ! Ah!
              No, no, no, no!
              No, no !
              Yeah !
              Gianni, Gianni, Gianni 
              Loris Bastr 
              Red family, uh uh
              Red family, uh 
              
              [Ritornello 1: Gianni Red & Loris Bastr]
              'Sta stronza mi fissa il portafoglio 
              Lo guarda bene dentro e poi mi dice ''non ti voglio''
              Stasera scendo con dieci euro come l’ altro giorno 
              Se non mi vuoi così, puttana, levati di torno!
              Amore e soldi ? No!
              (No,no,no,no!)
              Amore e soldi ? No! 
              (No,no,no,no!)
              
              
              [Strofa 1 : Loris Bastr]
              Stronza con te troppi conti ma non sono bravo in matematica 
              Odio il tuo profumo, le tue scarpe, la tua falsità 
              Odio quando dici ''amore guarda quella borsa là''
              Ti ammazzerei veloce in un colpo, bam !
              Ti vedo bene affianco uno sceicco egiziano
              Se non fossi sua ti fermerei, Sergio Ramos 
              A cena fuori, io ti porterei ? Boh, strano! 
              ''Amore arriva il cameriere, allora dividiamo?''
              Quindi una snob, non lo so, non la merito 
              Per te tutto è top, ma io no, non ho credito 
              Non sai che ti darò, ti regalerò un debito 
              ''Loris ti seguirò solo se un giorno avrai un seguito''
              Quando scrivi   '' è stata una serata perfetta'' 
              Mi verrebbe da dire ''prendo la mitraglietta''
              Sparo te e la tua amichetta 
              Dai tesò, voglio vedere se la chiami ancora ''polpetta'' 
              Parrucchiere, estetista, questa merda già l’ ho vista 
              A me mi cacciano, ma tu sei in lista 
              Sei nella discoteca con la bella vista 
              Bella vita, bell’ amica,
               Ti rimorchia un riccone, sembra un culturista
              Guarda stronza ho 99 problemi 
              No, tu non sei tra questi, quindi torna dov’ eri  
              Non ho soldi bevo dalla Fontana di Trevi
              Tesoro ho troppi debiti perché non li sistemi !
              
              
              [Ritornello 2: Gianni Red & Loris Bastr]
              'Sta stronza mi fissa il portafoglio 
              Lo guarda bene dentro e poi mi dice ''non ti voglio'' 
              Stasera scendo con dieci euro come l’ altro giorno 
              Se non mi vuoi così, puttana, levati di torno!
              Amore e soldi ? No!
              (No,no,no,no!)
              Amore e soldi ? No! 
              (No,no,no,no!)
              
              [Strofa 2: Gianni Red]
              Se a femmn va e ven
              Frà e puttan vann semp
              Sta pruas vo sultant e' cart verd, manc spenn
              E sord pur girn, ma o lat e ccà nun semp
              Ma si e faj carè ro ciel vir sul capuzzell
              O nomm è Gianni Red, signl 'nda 'black list'
              T' perseguit comm' a Pablit ngopp a Netflix
              Chell è bell, nè, le vist?
              Vest stritt, pell lisc
              Ma si poi nun ver o' cash fiss , rest semp trist
              Facc se-sei, sett 'diss' a chi nun ten e pall
              E na femmn a conquist sul cu nu piezz e cart
              A me m' spogl a nud pur si m' fet 'e famm
              Mentr a te t' spogl a nud senz ca t' lev e pann
              E fancul chi m' ric ca l'ammor nn' ten età
              Si c' sta na cos ca nun ten, chell è a serietà
              Red Family buc e' port comm in Serie A
              Sta puttan, invec, buc e cassafort e s' ne va
              Chest è pegg 'e na zanzar, zug o sang, nun s' sap?
              Quind frat a me nun m presentà chiu nzvat
              Nun vuttà chiu zppat
              Caggia fà? Nun m' piac
              Chest s'avvicin, fatt a là cu stu ciat!'
              Sti muccusell : a gar a chi chiù splend
              A me na femmna perfett nun m' serv
              Chiu botulin? No, chiù cervell
              Lievt sti zizz fint,  si chiù bell !
              
              
              [Ritornello 3: Gianni Red & Loris Bastr]
              'Sta stronza mi fissa il portafoglio 
              Lo guarda bene dentro e poi mi dice ''non ti voglio'' 
              Stasera scendo con dieci euro come l’ altro giorno 
              Se non mi vuoi così, puttana, levati di torno!
              Amore e soldi ? No!
              (No,no,no,no!)
              Amore e soldi ? No! 
              (No,no,no,no!)
              
                  `}
              traduzione={`
                [Intro]
                No, no, no, no!
                No, no !
                Yeah ! Ah!
                No, no, no, no!
                No, no !
                Yeah !
                Gianni, Gianni, Gianni 
                Loris Bastr 
                Red family, uh uh
                Red family, uh 

                [Ritornello 1: Gianni Red & Loris Bastr]
                'Sta stronza mi fissa il portafoglio 
                Lo guarda bene dentro e poi mi dice ''non ti voglio'' 
                Stasera scendo con dieci euro come l’ altro giorno 
                Se non mi vuoi così, puttana, levati di torno!
                Amore e soldi ? No!
                (No,no,no,no!)
                Amore e soldi ? No! 
                (No,no,no,no!)


                [Strofa 1: Loris Bastr]
                Stronza con te troppi conti ma non sono bravo in matematica 
                Odio il tuo profumo, le tue scarpe, la tua falsità 
                Odio quando dici 'amore guarda quella borsa là' 
                Ti ammazzerei veloce in un colpo , bam !
                Ti vedo bene affianco  uno sceicco egiziano
                Se non fossi sua ti fermerei, Sergio Ramos 
                A cena fuori, io ti porterei ? Boh,  strano! 
                'Amore arriva il cameriere, allora dividiamo?'
                Quindi una snob, non lo so, non la merito 
                Per te tutto è top, ma io no, non ho credito 
                Non sai che ti darò, ti regalerò un debito 
                'Loris ti seguirò solo se un giorno avrai un seguito'
                Quando scrivi   'è stata una serata perfetta' 
                Mi verrebbe da dire 'prendo la mitraglietta'
                Sparo te e la tua amichetta 
                Dai tesò, voglio vedere se la chiami ancora 'polpetta' 
                Parrucchiere, estetista, questa merda già l’ho vista 
                A me mi cacciano, ma tu sei in lista 
                Sei nella discoteca con la bella vista 
                Bella vita, bell’amica ,
                ti rimorchia un riccone, sembra un culturista
                Guarda stronza ho 99 problemi 
                No, tu non sei tra questi quindi torna dov’eri  
                Non ho soldi bevo dalla fontana di Trevi
                Tesoro ho troppi debiti perché non li sistemi !


                [Ritornello 2: Gianni Red & Loris Bastr]
                'Sta stronza mi fissa il portafoglio 
                Lo guarda bene dentro e poi mi dice ''non ti voglio'' 
                Stasera scendo con dieci euro come l’ altro giorno 
                Se non mi vuoi così, puttana, levati di torno!
                Amore e soldi ? No!
                (No,no,no,no!)
                Amore e soldi ? No! 
                (No,no,no,no!)

                [Strofa 2: Gianni Red]
                Se la donna ''va e viene''
                Fratello le puttane vanno sempre
                'Sta puttana vuole soltanto le carte verdi, neanche li spende!
                I soldi pure girano, ma da queste parti non sempre
                Ma se li fai cadere dal cielo, vedi solo tante piccole teste
                Il nome è Gianni Red, segnalo nella 'black list'
                Ti perseguito come Pablito su Netflix
                Quella è bella! Vero? L' hai vista?
                Veste attillata, pelle liscia
                Ma se poi non vede il cash fisso, resta sempre triste
                Faccio se-sei, sette 'diss' a chi non ha le palle
                E una donna la conquista solo con un pezzo di carta
                A me mi spoglia nudo pure se muoio di fame
                Mentre a te ti spoglia nudo senza che ti leva i vestiti
                E fanculo chi mi dice che l' amore non ha età
                Se ci sta una cosa che non ha è la serietà
                Red Family buca le porte come in Serie A
                'Sta puttana, invece, buca le cassaforti e se ne va
                Questa è peggio di una zanzara , succhia il sangue , non si sa?
                Quindi fratello mio non mi presentare più (donne) sporche
                Non lanciare più frecciatine
                Che devo farci? Non mi piace
                Questa si avvicina , ''Allontanati con quest' alito!''
                Queste ragazzine: una gara a chi più splende
                A me una donna perfetta non serve
                Più botulino? No, più cervello
                Levati questo seno finto , sei più bella!

                [Ritornello 3: Gianni Red & Loris Bastr]
                'Sta stronza mi fissa il portafoglio 
                Lo guarda bene dentro e poi mi dice ''non ti voglio'' 
                Stasera scendo con dieci euro come l’ altro giorno 
                Se non mi vuoi così, puttana, levati di torno!
                Amore e soldi ? No!
                (No,no,no,no!)
                Amore e soldi ? No! 
                (No,no,no,no!)

              `}
            />
          </Route>

          <Route path="/radio">
            <Radio />
          </Route>

          <Route path="/video">
            <Video />
          </Route>

          <Route path="/prodotto/:id">
            <Prodotto />
          </Route>

          <Route path='/test'>
              <Test />
          </Route>

          <Route path="/">
            <HomeFinal />
            <Finalfooter />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
