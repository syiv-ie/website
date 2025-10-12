const data = {//width/height x/y are swapped in here.. oops? idk it doesnt rlly matter
    groups: [
        {
            left: ".5vw",
            top: "26vw",
            width:13,
            height:8,
            heightOffset:0,
            widthOffset:1,
            blanks: [
                {x:0,y:0},
                {x:0,y:1},
                {x:0,y:2},
                {x:0,y:3},
                {x:0,y:4},
                {x:1,y:0},
                {x:1,y:1},
                {x:1,y:2}
            ]
        },
        {
            left: "17.5vw",
            top: "-26vw",
            width:26,
            height:26,
            heightOffset:1,
            widthOffset:1,
            blanks: [
                {x:0,y:0},
                {x:0,y:1},
                {x:0,y:2},
                {x:0,y:3},
                {x:0,y:4},
                {x:0,y:5},
                {x:1,y:0},
                {x:1,y:1},
                {x:1,y:2},
                {x:1,y:3},
                {x:1,y:4},
                {x:2,y:0},
                {x:2,y:1},
                {x:2,y:2},
                {x:2,y:3},
                {x:3,y:0},
                {x:3,y:1},
                {x:3,y:2},
                {x:4,y:0},
                {x:4,y:1},
                {x:5,y:0},
                {x:25,y:25},
                {x:25,y:24},
                {x:25,y:23},
                {x:25,y:22},
                {x:25,y:21},
                {x:25,y:20},
                {x:24,y:25},
                {x:24,y:24},
                {x:24,y:23},
                {x:24,y:22},
                {x:24,y:21},
                {x:23,y:25},
                {x:23,y:24},
                {x:23,y:23},
                {x:23,y:22},
                {x:22,y:25},
                {x:22,y:24},
                {x:22,y:23},
                {x:21,y:25},
                {x:21,y:24},
                {x:20,y:25},
            ]
        },
        {
            left: "70.5vw",
            top: "-84vw",
            width:14,
            height:6,
            heightOffset:1,
            widthOffset:1,
            blanks: [
                {x:8,y:5},
                {x:9,y:4},
                {x:9,y:5},
                {x:10,y:3},
                {x:10,y:4},
                {x:10,y:5},
                {x:11,y:3},
                {x:11,y:4},
                {x:11,y:5},
                {x:12,y:3},
                {x:12,y:4},
                {x:12,y:5},
                {x:13,y:3},
                {x:13,y:4},
                {x:13,y:5}
            ]
        },
        {
            left: "83.5vw",
            top: "-112vw",
            width:5,
            height:3,
            heightOffset:1,
            widthOffset:1,
            blanks: []
        },
        {
            left: "81.5vw",
            top: "-106vw",
            width:6,
            height:4,
            heightOffset:1,
            widthOffset:0,
            blanks: [
                {x:0,y:0},
                {x:0,y:1},
                {x:1,y:0},
                {x:3,y:3},
                {x:4,y:3},
                {x:5,y:3}
            ]
        },
        {
            left: "17.5vw",
            top: "-75vw",
            width:10,
            height:10,
            heightOffset:1,
            widthOffset:1,
            blanks: [
                {x:0,y:0},
                {x:0,y:1},
                {x:0,y:2},
                {x:0,y:3},
                {x:9,y:6},
                {x:9,y:7},
                {x:9,y:8},
                {x:9,y:9}
            ]
        }
    ],

    updates: [
        {
            version: "-1",
            added: [
                {name: "Build Mode", message: "If you tap the new dark purple tab with a hand at the bottom left of the counter display, it will replace that with the build mode display.  Tap the pink tab to swap back,"},
                {name: "D Pad", message: "Shift the farm up down left and right using the arrows.  If the farm has a gridLocked item then the farm will shift by 2 instead to compensate"},
                {name: "Copy", message: "While in \"build mode\" tap the board to place a blue then red square.  once they are on the board and lit up in the build display, you can tap the board again to clear them, or tap the lock icon in the buildBox to lock your copy selection in."},
                {name: "TilePaste", message: "Once a copy selection is locked, repeat the same process of tapping squares on the board but this time they are grey.  if you want to redo the paste selection, tap the board again.  if you want to paste your copied selection, then tap the fill icon under the lock icon"},
                {name: "gridLock Notification", message: "If your copy selection included a gridLocked item, then the selection preview will include a little icon showing that and your pastes will shift accordingly"},
                {name: "Link copy and regular copy buttons", message: "added 2 new buttons to the blue code box for more ease and help people share farms"}
            ],
            changed: [
                {name: "strange onion calc", message: "moved below the farm"}
            ],
            removed: [
                {name: "", message: ""}
            ]
        },
        {
            version: "-2",
            added: [
                {name: "moon phases", message: "tap the moon button next to the caltulation box"},
                {name: "code in link", message: "you can add the codes at the end of the site's url if you put a question mark after the url and then the code"}
            ],
            changed: [
                {name: "calc negatives", message: "negative profits from fert and clovers increasing time are more obvious and highlight in red"}
            ],
            removed: [
                {name: "", message: ""}
            ]
        },
        {
            version: "-3",
            added: [
                {name: "Help menu/button", message: ""},
                {name: "A total for a full harvest", message: ""},
                {name: "the base 0 yield sickle", message: ""}
            ],
            changed: [
                {name: "Revamped the whole hourly profit box", message: "added 4 toggles that: separate consumables profit from regular, subtracts fertilizer cost, adds/subtracts the strange effect to crops (if clover time slows the farm enough then thats a profit loss), adds sickle profit to the hourly total"},
                {name: "top bar change", message: "the top bar that shows my name and discord link looks hella baller now frfr"},
                {name: "clover effects", message: "moved clover effects into the clover box"},
                {name: "orb counter", message: "orb counter will just put (9-# of orbs) instead of infinite $2.56 mils lagging the site"},
                {name: "moved the erase farm button", message: ""},
                {name: "display box positions", message: "grouped the items in the display box to be with their similar effects"},
                {name: "codes", message: "saving a code now saves the tools and orb count"}
            ],
            removed: [
                {name: "English/spanish button", message: "srry gang i just change the site so much its tuff to keep up with it"},
                {name: "the total extra that sickles would add every 6 hours.", message: "If you still want to know this, subtract the full harvest when sickle toggle is added in profit calculation from when it isnt"}
            ]
        },
    ],

    wtm: [
        {
            title: "Clover Layout",
            code: "`/2.2/aaa0/-bke-dkckg-fkake-hkckg-jkake-lkckg/-akgkkkokskw-ckekikmkqkuky-ekckgkkkokskw-gkakekikmkqkuky-ikckgkkkokskw-kkakekikmkqkuky-mkckgkkkokskw-okakekikmkqkuky-qkckgkkkokskw-skakekikmkqkuky-ukckgkkkokskw-wkakekikmkqku-ykckgkkkoks/-akc-ckake-ekc-gkake-ikc-kka///-akeki-ckckg-ekakeki-gkckg-ikake/`"
        },
        {
            title: "Sylvie's Farm",
            code: "``/2.2/gaa198/-aof-cobbdqf-eqbodof-gobodqf-iqbbdqf-kobodof/-bofohojolonoporotd3vd2x-dbdqfqhbjqlqnbpqrqtbvox-fd1bodofohojolonoporotqvox-hd2bqdofohqjolonqporotqvox-jobbdqfqhbjqlqnbpqrqtbvox-lobqdofohojolonoporotqvox-nobqdofohqjolonqporotqvox-pobbdqfqhe0jqnbpqre0tox-robqdofohojolonoporotqvox-tobqdofohqjolonqporotqvox-vobbdqfqhbjqlqnbpqrqtbv-xd0bd1dofohojolonoporot/-bobod-dqbbd-fobod-hqbod-job-ld0b/-bob-dob/-clb-ela/-bobodofd3h-dbbqdqfbh-fobodofd3h-hobqdqfoh/`"
        }
    ],

    ne: [
        {
            title: "Basic",
            code: "`/2.2/aaa0//-lidifih-nnbidsfihnnnpnr-pnbfdqfqhijilnnfpnr-ribsdofohsjilnnnpnr-tibidqfqhfjilonrprr-vidsfshijnlonfprr-xidifihijonrprr/////`"
        },
        {
            title: "Iron",
            code: "`/2.2/bba0//-fnnnpnr-hnnfpnr-jnnnpnr-lifihijonoprr-nifshijonfprr-pibidqfqhfjilrnrprr-ribsdofohsjilnnnpnr-tibfdqfqhijilnnfpnr-vidsfshijnnnpnr-xidifihij/////`"
        },
        {
            title: "Steel",
            code: "`/2.2/cca0//-bifihijiloporrt-didifqhqjilinrpfrrt-fidsfohojslinrprrrt-hidffqhqjflinrprrrt-jidsfohojslinfrrt-lidifqhqjilin-nidsfohojslin-pidffqhqjflin-ridsfohojslin-tidifqhqjilin-vifshsjil-xifihijil/////`"
        },
        {
            title: "Gold",
            code: "`/2.2/dda0//-difihijil-fifshsjil-hidifqhqjilin-jidsfohojslin-lidffqhqjflin-nidsfohojslnnnpnrnt-pidifqhqjilinrpfrnt-ridsfohojslinrprrrt-tidffqhqjflinrprrrt-vidsfohojslinrpfrrt-xidifqhqjilinoporrt/////`"
        },
        {
            title: "Ruby",
            code: "`/2.2/eea0//-didifihijilrprrrt-fidsfshsjilrpfrrt-hibfdqfqhqlrporot-jibsdofohojil-libidqfqhfjqlqnipir-nibsdofohojolonsprr-pibfdqfqhqlqnfpir-ribsdofohojolonspir-tibidqfqhfjqlqnipir-vidsfshsjslsnip-xidifihijilinip/////`"
        },
        {
            title: "Diamond",
            code: "`/2.2/ffa0//-dihijilinip-fihsjslsniprr-hqhijqlqnfpir-jihojolonsprr-libidqfqhfjqlqnipir-nrbsdofohojolonsprrrtrvrx-pibfdqfqhqlqnfpirrtfvrx-rrbsdofohojolonsprrotovrx-tibidqfqhfjqlqnipir-vidsfshsjslsnip-xidifihijilinip/////`"
        },
        {
            title: "Obsidian",
            code: "`/2.2/gga0//-bihijilinipir-drdifshijslinspirrt-fidffqhqjilqnqpfrit-hidsfohojolonopsrrt-jidifqhqjflqnqpirit-lidsfohojolonopsrrt-nidffqhqjqnqpfrit-pidsfohojolonopsrit-ridifqhqjflqnqpirit-tidsfohojolonopsrit-vidffqhqjilqnqpfrit-xrdifshijslinspirrt/////`"
        }
    ],

    cf: [
        {
            title: "Onion gamble",
            equip: "Obsidian +5",
            code: "`/2.2/gga5/-bieig-cia-dicieig-eia-ficieig-gia-hicieig-iia-jicieig-kia-licieig/-bifihijilinipiritivix-didqfihijilinipsrstivd3x-fibsdsfd1hijslsnipqrqtivix-hibidqfihijqlqnd1porotsvix-jibsdsfihsjolond3pqrqtivix-libidqfihijqlqnd1porotsvix-nibsdsfihsjolond3pqrqtivix-pibidqfihijqlqnd1porotsvix-ribsdsfihsjolond3pqrqtivix-tibidqfihijqlqnipsrstivd3x-vibsdsfd1hijslsnipiritiv-xibidqfihijilinipirit/-aiaicie-ciaicie-eiaicie-giaicie-iiaic-kia-mia/-bd2b-dob/-alc-clb-ela/-bibe2dih-dobodofoh-fobodofoh-hd1bodofoh/`",
            creator: "@tsukiglitchhunter"
        },
        {
            title: "100 Plots",
            equip: "Obsidian +20",
            code: "`/2.2/gga20/-ad2f-cnbndnf-enbbdnf-gnbndnf-id0bd0dbf-kd1bndnf/-bbfd2jbld2nd2pbrd2td2v-dqdqfd3hqjd2lqnqpd2rqtqv-fbbodofohd2jolonoporotovbx-he1bqdqfbhqjblqnqpbrqtqve3x-jodofohd1jolonoporotov-lbbqdqfd0hqjd1lqnqpbrqtqvbx-ne1bodofbhd1jblonoporotove3x-pqdqfd2hqjd1lqnqpbrqtqv-rbbodofohd1jolonoporotovbx-te1bqdqfbhqjblqnqpd0rqtqvd3x-vodofohd1jolonopbre3t-xbbqdqfbhqjblqnqpd3r/-ala-clc///-bnbndnfnh-dnbbdbfnh-fnbndnfnh-hd0bd0dd0fd0h/`",
            creator: "@syiv"
        },
        {
            title: "Glitch Grapes",
            equip: "Obsidian +5",
            code: "`/2.2/gga5//-bd2fd2hc2jqnipir-dqfqhqlqnspird3t-fofoholone3pbrrt-hibbdqfqhc2jqlqnirrte3v-jd1bsdofoholonspirrt-libidqfqhqlqnipc2rrtrve3x-ne1dofohc2jolone3prtrv-pibqfqhqlqnrtrv-ribsdofoholonspirotovd3x-tibbdqfqhc0jqlqnipirotbvrx-ve1dofoholone3pd1rotov-xqfqhqlqn///-alc-clb-ela/-be1drfrh-dbfrh-frfrh/`",
            creator: "@tsukiglitchhunter"
        },
        {
            title: "scrlk Grapes",
            equip: "Obsidian +5",
            code: "`/2.2/gga5//-be2fc2jd1lqnqpbrqtqvbx-drdrfrhd1lonoporotove3x-fbbrdrhd1lqnqpbrqtqv-hd1brdrhc2jd1lonoporotovbx-jc0be2fd1lqnqpbrqtqve3x-lrdrfrhd1lonoporotov-nrdrhc2jd1lqnqpbrqtqvbx-pd1brdrhd1lonoporotove3x-rc2be2fd1lqnqpbrqtqv-trdrfrhc2jd1lonoporotovbx-vrdrhd1lqnqpbrqtqv-xd1brdrhe0r/////`",
            creator: "@_scrlk"
        },
        {
            title: "cute farm",
            equip: "Obsidian +5",
            code: "`/2.2/gga5/-bieig-diaicieig-fiaicieig-hiaicieig-jiaicieig-liaicieig/-bifd2hijd2lind2piritivix-didifshijslinspiritivix-fibsdqfohqjolqnopqrstivix-hibsdqfohqjolqnopqrstive3x-jibsdffohd3jold1nopfrstiv-libsdqfohqjolqnopqrstivix-nibsdqfohqjolqnopqrstivix-pibsdffohd3jold1nopfrstive3x-ribsdqfohqjolqnopqrstiv-tibsdqfohqjolqnopqrstivix-vibidifshijslinspiritiv-xibidifd0hijd0lind0pirit/-aiaicie-ciaicie-eiaicie-giaicie-iiaic-kia-mia/-aib-cib/-akc-ckb-eka/-aieigii-ciaicieigii-eiaicieigii-giaicieigii-iiaicie/`",
            creator: "@_scrlk"
        },
        {
            title: "grape+onion",
            equip: "Obsidian +6",
            code: "`/2.2/gga6/-cd2bd2dd2f-erbbdof-grbfdof-iobodof-kc3b/-bifihqjqlc0nqpqritivd3x-dc2dd1fshojoloporstd3vc2x-fiffhqjqlqpqrftiv-hd1fshojolc0noporstd3v-jd1difihqjqlqpqritivd3x-lc2dd1fshojoloporstd3vc2x-nifihqjqlc0nqpqritiv-pd1fshojoloporstd3v-rd1diffhqjqlqpqrftiv-td1difshojole1noporstivd3x-vd1difihqjqlqpqritiv-xc3fd0lc1p/-brbrd-dfbbd-frbrd-hd0bd0d//-clb-ela/-bd1brdbfrh-dd1brdffrh-fd1brdrfrh-hc1d/`",
            creator: "@tsukiglitchhunter + @syiv"
        },
        {
            title: "j4kio's 10",
            equip: "Obsidian +10",
            code: "`/2.2/gga10/-cd2bd2dd2f-erbbdrf-grbfdrf-irbrdrf-kc3b/-brfbhrjd3ld1pqrbtqv-drffhrjd3lbrotd2v-frfrhrjd3le1pqrotqvbx-hd2bd2dd2fbhd2jd2ld2nqrotqv-jc1bd2hc1jd2pbrotfvbx-lqbodqfohqjolqnopqrotqvd3x-nqbodqfohqjolqnopqrotqvd3x-pbbodffohbjolfnopbrotfvbx-rqbodqfohqjolqnopqrotqvd3x-tqbodqfohqjolqnopqrotqvd3x-vbbd0dc3fd0lc1nd0tbv-xd0bd0fd0hd0jd0nd0p////-brbbdrfd3h-drbfdrfd3h-frbrdofd3h-hc1b/`",
            creator: "@j4kio."
        },
        {
            title: "j4kio battery",
            equip: "Obsidian +5",
            code: "`/2.2/gga5/-cd2bd2dd2f-erbbdrf-grbfdrf-irbrdrf-kc3b/-bd2x-de1rrtbvrx-frtfvrx-hd2bd2dd2fbhd2jd2ld2nrtrvrx-jc1bd2hc1jd2pc1t-lqbodqfohqjolqnopqrotqvd3x-nqbodqfohqjolqnopqrotqvd3x-pbbodffohbjolfnopbrotfvbx-rqbodqfohqjolqnopqrotqvd3x-tqbodqfohqjolqnopqrotqvd3x-vbbd0dc3fd0lc1nd0tbv-xd0bd0fd0hd0jd0nd0p////-brbbdrfd3h-drbfdrfd3h-frbrdrfd3h-hc1b/`",
            creator: "@j4kio."
        }
    ]
}
