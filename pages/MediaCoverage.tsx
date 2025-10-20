import { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MediaCoverage: NextPage = () => {
  const coverageLinks = [

 { title: "someone like me", url: "http://jevc.sakura.ne.jp/bbs/nXmv8E5.cgi?no=21090&reno=21049&oya=21049&mode=msgview&page=0" },
 { title: "v2ex", url: "https://www.v2ex.com/t/1085107?p=1#reply8" },
 { title: "wikipedia", url: "https://upload.wikimedia.org/wikipedia/commons/b/b8/el_ingenioso_hidalgo_don_quijote_del_mancha_pg_12.jpg?action=comment_saved#comments" },
 { title: "ap-style-june-2022", url: "https://mediablogstage.prnewswire.com/2022/06/15/ap-style-june-2022/" },
 { title: "sirius-motor-starter-packages-1", url: "https://ca.webinar.siemens.com/3re41-sirius-motor-starter-packages-1" },
 { title: "question-dents-surnumeraires-sujet_186435_1.htm#bas", url: "https://forum.doctissimo.fr/sante/dents/question-dents-surnumeraires-sujet_186435_1.htm#bas" },
 { title: "comment-1364", url: "http://www.mavil.epsjv.fiocruz.br/?q=node/147#comment-1364" },
 { title: "lost-ark-patch-notes-for-may-include-new-raids-and-more?page=2&list=138&sort=recent", url: "https://www.invenglobal.com/forum/lostark/140-general-discussion/9407-lost-ark-patch-notes-for-may-include-new-raids-and-more?page=2&list=138&sort=recent" },
 { title: "how-to-find-a-wps-pin-on-hp-deskjet-2600/page12#post111483", url: "https://forums.valofe.com/forum/black-squad-tw/%E6%96%B0%E5%85%AC%E5%91%8A-aa/%E9%96%8B%E7%99%BC%E6%97%A5%E8%AA%8C-aa/73927-how-to-find-a-wps-pin-on-hp-deskjet-2600/page12#post111483" },
 { title: "iroiro400.sakura.ne.jp/400BBS/pwebboard.php/nfJfdqijiKo", url: "https://iroiro400.sakura.ne.jp/400BBS/pwebboard.php/nfJfdqijiKo" },
 { title: "sitelike.org", url: "https://www.sitelike.org/similar/blockblastjp.com/" },
 { title: "telegra.ph", url: "https://telegra.ph/Block-Blast-11-01" },
 { title: "contemporaryarts.mit.edu", url: "https://contemporaryarts.mit.edu/pub/dancing-with-interactive-space/release/6" },
 { title: "designjustice.mitpress.mit.edu", url: "https://designjustice.mitpress.mit.edu/pub/q0ep9grh/release/1?breakCache=1730099567?breakCache=1730455502" },
 { title: "alex209843.substack.com", url: "https://alex209843.substack.com/p/block-blast" },
 { title: "medium.com", url: "https://medium.com/@alexfefun/5-best-blast-online-game-website-d4d7e352b4f8" },
 { title: "samsung.com", url: "https://r1.community.samsung.com/t5/%E3%81%9D%E3%81%AE%E4%BB%96%E3%81%AE%E5%85%B1%E6%9C%89-%E6%8F%90%E6%A1%88/%E3%81%BF%E3%81%AA%E3%81%95%E3%82%93-%E3%81%93%E3%82%93%E3%81%AB%E3%81%A1%E3%81%AF/m-p/30067584#M96652" },
 { title: "nexusmods.com", url: "https://www.nexusmods.com/halflife2/images/158?BH=1" },
 { title: "sites.gsu.edu", url: "https://sites.gsu.edu/vjohnson30/2016/04/29/the-underlying-and-undermining-what-our-digital-environments-represent/comment-page-58/#comment-48638" },
 { title: "zh.hinative.com", url: "https://zh.hinative.com/questions/26321705" },
 { title: "steemit.com", url: "https://steemit.com/game/@alexfun/a-super-fun-puzzle-game-called-block-blast" },
 { title: "blogs.deusto.es", url: "https://blogs.deusto.es/innovandis/que-fue-de-jon-ander-ostolaza/#comment-80640" },
 { title: "2048-cupcakes", url: "https://2048-cupcakes.online/" },
 { title: "bisound.com", url: "http://www.bisound.com/forum/newreply.php?do=postreply&t=624228" },
 { title: "emojimix.online", url: "https://emojimix.online" },
 { title: "rice-purity-test.org", url: "https://rice-purity-test.org/" },
 { title: "raadsrtest.net", url: "https://raadsrtest.net/" },
 { title: "controllertest.org", url: "https://controllertest.org/" },
 { title: "thisweekfordinner.com", url: "https://thisweekfordinner.com/hello-again/#comment-3390762" },
 { title: "lsdb.nl", url: "https://lsdb.nl/forums/topic/693/jajajaja-hij-is-er-eindelijk-d8r-zot-only-the-brave?page=2#c565495" },
 { title: "coreballjp.com", url: "https://coreballjp.com" },
 { title: "taptap.cn", url: "https://www.taptap.cn/moment/649221310534126678" },
 { title: "baseballgamesjp.org", url: "https://baseballgamesjp.org/" },
];

  

  

  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>Media Coverage - block blast</title>
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>

      <Header />

      <main className="flex flex-col items-center justify-center w-full flex-1 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">Media Coverage About block blast</h1>
        
        <p className="text-xl mb-12 max-w-2xl">
          Discover what the media is saying about block blast and our innovative technology.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full max-w-4xl">
          {coverageLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200"
            >
              <h2 className="text-xl font-semibold mb-2">{link.title}</h2>
              <p className="text-blue-500 hover:underline">Read Article</p>
            </a>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MediaCoverage;