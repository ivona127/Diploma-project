const firstAid = [
    {
        id: 1,
        case: 1,
        title: 'Спешна помощ при алергии',
        description:'алергии',
        image: require('../../assets/emergency/allergy.jpg'),
        steps: [
            {text: 'Позвънете незабавно на телефон 112!',},
            {text: 'Помогнете на пострадалия, като го поставите да седне и го наклоните леко напред.'},
            {text: 'Разговаряйте с него, успокойте го до пристигането на спешен медицински екип.'},
            {text: 'Ако пострадалия изпадне в шок, окажете първа помощ (инструкции в опция "Спешна помощ при припадък").'}
        ]
    },

    {
        id: 2,
        case: 2,
        title: 'Спешна помощ при детско заболяване',
        description: 'детско заболяване',
        image: require('../../assets/emergency/childhoodIllness.jpg'),
        steps: [
            {text: 'Успокойте детето, не го изпускайте от поглед.'},
            {text: 'Обадете се незабавно на телефон 112 или го заведете до най-близкото болнично заведение.'},
            {text: 'Ако случая не изисква подобни мерки, изберете от останалите опции типа на спешния случай.'}
        ]
    },

    {
        id: 3,
        case: 3,
        title: 'Спешна помощ при диабет',
        description: 'диабет',
        image: require('../../assets/emergency/diabetes.jpg'),
        steps: [
            {text: 'Дайте на пострадалия нещо сладко, но не и диетична напитка'},
            {text: 'Разговаряйте с него, успокойте го до пристигането на спешен медицински екип.'},
            {text: 'При повечето болни състоянието постеппеннно се влошава. При нужда повикайте спешна помощ.'}
        ]
    },

    {
        id: 4.1,
        case: 4,
        title: 'Спешна помощ при припадък',
        description: 'при загуба на съзнание',
        image: require('../../assets/emergency/lossOfConsciousness.jpg'),
        steps: [
            {text: 'ВНИМАНИЕ! Преди да преместите пострадалия, първо се уверете, че няма травми на гръбначния стълб!'},
            {text: 'Обадете се незабавно на телефон 112.'},
            {text: 'Колинечете отстрани на пострадалия и се уверете, че двата му крака са успередни един с друг.'},
            {text: 'Поставете близката му към Вас ръка под прав ъгъл спрямо тялото му със сгънат под прав ъгъл ляв лакът, като дланта е обърната нагоре.'},
            {text: 'Сгънете срещуположния на Вас крак, като придържате ходилото опряно в земята.'},
            {text: 'Поставете другата ръка на пострадалия пред гърдите му и долепете горната част на дланта плътно до близката до Вас негова буза.'},
            {text: 'Като държите пострадалия за тази ръка и за ханша, внимателно го преобърнете към Вас, като не забравяте да придвижите главата назад в посока към тила, за да осигурите проходимост на дихателните пътища.'},
            {text: 'Нагласете горестоящия му крак така, че в таза и в коляното да се образуват прави ъгли.'},
            {text: 'Завийте пострадалия.'}
        ]
    },

    {
        id: 4.2,
        case: 4,
        description: 'хипогликемия',
        steps: [
            {text: 'Дайте на страдащия от хипогликемия 15 гр. захар или нещо сладко.'},
            {text: 'Посъветвайте пострадалия, след като е възстановил нивата на глюкоза в организма си, да премине към режим на хранене, който да осигури дългосрочно поддържане на нормалното ниво на кръвната захар.'}
        ]
    },

    {
        id: 4.3,
        case: 4,
        description: 'топлинен удар',
        steps: [
            {text: 'Обадете се незабавно на телефон 112.'},
            {text: 'Преместете пострадалия на сянка или в по-хладно помещение.'},
            {text: 'Разхлабете дрехите му и поставете към кожата му влажна салфетка.'},
            {text: 'Ако човекът е в съзнание, дайте му да изпие на малки глътки прохладна вода.'},
            {text: 'При необходимост направете студени компреси - шия, подмишници, глезени.'}

        ]
    },

    {
        id: 5,
        case: 5,
        title: 'Спешна помощ при изгаряне',
        description: 'изгаряне',
        image: require('../../assets/emergency/burn.png'),
        steps: [
            {text: 'Отдалечете потърпевшия от източника на топлина.'},
            {text: 'За да облекчите болката, поставете изгорения участък под течаща, студена, чиста вода.'},
            {text: 'Покрийте със стерилна марля или чист памучен плат.'},
            {text: 'Ако случаят изисква по-сериозна помощ, обадете се на телефон 112.'}
        ]
    },

    {
        id: 6.1,
        case: 6,
        title: 'Спешна помощ при травми и рани',
        description: 'нараняване на главата',
        image: require('../../assets/emergency/injury.jpg'),
        steps: [
            {text: 'Ако пострадалия няма кръвоточение от главата, оставете го да седне.'},
            {text: 'Дайте му нещо студено, което да сложи на нараненото място. Ако е лед, предварително го увийте в кърпа.'},
            {text: 'Следете състоянието на пострадалия. Той трябва да остане седнал, докато не се почувства съвсем добре.'},
            {text: 'Задавайте му въпроси и следете дали ще отговори на тях. Попйтайте го дали изпитва болка.'},
            {text: 'Ако пострадалия не реагира адекватно, обадете се незабавно на телефон 112.'}
        ]
    },

    {
        id: 6.2,
        case: 6,
        description: 'травми на гръбнака',
        steps: [
            {text: 'Обадете се незабавно на телефон 112.'},
            {text: 'Поставете пострадалия на твърдо, бъдете много внимателни'},
            {text: 'Успокойте пострадалия и го посъветвайте да не се движи.'},
            {text: 'Обездвижете главата с подръчни средства като одеяла, чанти или възглавници.'},
            {text: 'Ако пострадалия изпадне в безсъзнание, поставете го в странично положение много внимателно.'}
        ]
    },

    {
        id: 6.3,
        case: 6,
        description: 'счупване на горен крайник',
        steps: [
            {text: 'Обадете се незабавно на телефон 112.'},
            {text: 'Не движете засегнатата ръка. Поставаете студен компрес върху счупването.'},
            {text: 'Обездвижете я с помощта на две триъгълни кърпи.'},
            {text: 'Фиксирайте с още една триъгълна кърпа, сгъната на широка лента'}
        ]
    },

    {
        id: 6.4,
        case: 6,
        description: 'счупване на долен крайник',
        steps: [
            {text: 'Не движете излишно наранения крак'},
            {text: 'Разхлабете стегнатите дрехи и развържете обувките, като не ги събувате.'},
            {text: 'Обездвижете крака. Възможен начин да направите това е да фиксирате счупения крак за здравия с мека вложка между тях. При обездвиждане винаги обхващайте 2 съседни стави. Не се опитвайте да намествате счупения крайник.'},
        ]
    },

    {
        id: 6.5,
        case: 6,
        description: 'рани',
        steps: [
            {text: 'Сложете си ръкавици, за да избегнете контакт с кръвта на пострадалия'},
            {text: 'Ако раната не кърви силно, изплакнете я със студена вода.'},
            {text: 'След изплакването, подсушете участъка около раната, но не докосвайте самата наранена повърхност. Покрийте раната със стерилна марля или чиста кърпа.'},
            {text: 'Ако раната все още кърви, спрете кръвотечението с помощта на притискаща превръзка'}
        ]
    },

    {
        id: 6.6,
        case: 6,
        description: 'спиране на кръвотечение',
        steps: [
            {text: 'ВНИМАНИЕ! Ако в раната има чуждо тяло, не се опитвайте да го издвадите!'},
            {text: 'Използвайте ръкавици за еднократна употреба или увийте ръцете си с найлонов плик'},
            {text: 'Поставете пострадалия седнал. Ако няма чуждо тяло, притиснете раната с марля или чужд памучен плат. Може да накарате пострадалия да притиска сам раната, за да спре кървенето.'},
            {text: 'Обадете се на телефон 112.'}
        ]
    },

    {
        id: 7,
        case: 7,
        title: 'Спешна помощ при натравяне',
        description: 'натравяне',
        image: require('../../assets/emergency/poisoning.jpg'),
        steps: [
            {text: 'Установете какво е приел човека. Кога и в какво количество.'},
            {text: 'Обадете се незабавно на телефон 112.'},
            {text: 'Ако загуби съзнание, обърнете пострадалия в странично легнало положение.'},
            {text: 'В случай, че престане да диша, незабавно направете сърдечен масаж (инструкции в опция "Спешна помощ при сърдечен проблем".'}
        ]
    },

    {
        id: 8,
        case: 8,
        title: 'Спешна помощ при раждане',
        description: 'раждане',
        image: require('../../assets/emergency/childbirth.jpg'),
        steps: [
            {text: 'Поставете родилката в легнало положение.'},
            {text: 'Повдигнете главата и раменете с възглавници, одеяла или навити дрехи.'},
            {text: 'Постелете чисти кърпи или чаршафи под тялото на бременната.'},
            {text: 'Закарайте родилката до болнично заведение или повикайте по най-бързия начин спешна медицинска помощ".'}
        ]
    },

    {
        id: 9.1,
        case: 9,
        title: 'Спешна помощ при сърдечен проблем',
        description: 'клинична смърт',
        image: require('../../assets/emergency/heartDiseases.jpg'),
        steps: [
            {text: 'Обадете се незабавно на 112.'},
            {text: 'Коленичете до пострадалия, така че коленете Ви да опират в тялото му.'},
            {text: 'Сложете дланта на едната си ръка на средата на гръдната му кост. Сложете дланта на другата си ръка върху първата. Уверете се, че раменете Ви са разположени точно върху гръдния кош на пострадалия..'},
            {text: 'След всяко притискане оставяйте гръдния кош да се повдигне отново. Притискането и отпускането трябва да са с равна продължителност.'},
            {text: 'Честотата на притисканията трябва да е поне 100 за минута или 2 за секунда.'},
            {text: 'Редувайте 30 притискания с 2 вдухвания.'},
            {text: 'При нужда от изкуствено дишане се наведете напред и запушете носа на пострадалия.'},
            {text: 'Поставете устните си върху цялата уста на пострадалия и вдухвайте въздух в устата равномерно, като следите дали гърдите се повдигат.'},
        ] 
    },

    {
        id: 9.2,
        case: 9,
        description: 'инсулт',
        steps: [
            {text: 'Обадете се незабавно на 112.'},
            {text: 'Поставете пострадалия в полуседнало положение'},
            {text: 'Успокойте го като проверявате периодично дали е в съзнание и дали диша.'},
            {text: 'Ако дишането и сърдечната дейност спрат, незабавно започнете кардио-пулмонална реанимация.'}
        ] 
    },

    {
        id: 9.3,
        case: 9,
        description: 'инфаркт',
        steps: [
            {text: 'При съмнения за инфаркт се обадете незабавно на телефон 112.'},
            {text: 'Поставете пострадалия в полуседнало / полулегнало положение и го завийте'},
            {text: 'Дайте на пострадалия таблетка аспирин и нитрад през устата. Например нитроглицерин през езика.'},
            {text: 'Следете основните жизнени показатели: съзнание, дишане и пулс. При спиране на дишнето и кръвообръщението започнете кардио-пулмонална реанимация.'}
        ] 
    },

    {
        id: 10.1,
        case: 10,
        title: 'Спешна помощ при ухапване',
        description: 'ухапване от насекомо',
        image: require('../../assets/emergency/bugBites.webp'),
        steps: [
            {text: 'Установете къде точно е мястото на ухапване.'},
            {text: 'Ако жилото открито се вижда, острането го. В противен случай не го правете'},
            {text: 'Закарайте човека до болнично заведение или повикайте спешна медицинска помощ.'},
            {text: 'Поставете на мястото на ухапване лед или студен компрес.'}
        ] 
    },
    
    {
        id: 10.2,
        case: 10,
        description: 'ухапване от змия',
        steps: [
            {text: 'Установете къде точно е мястото на ухапване.'},
            {text: 'Незабавно потърсете спешна медициска помощ.'},
            {text: 'Осигурете почивка на засегнатата част от тялото и я дръжте на ниво под сърцето.'},
            {text: 'Успокойте пострадалия и не му позволявайте да се движи, ако това не е крайно необходимо.'}
        ]
    },
    
    {
        id: 10.3,
        case: 10,
        description: 'ухапване от куче',
        steps: [
            {text: 'Не се опитвайте да хванете или да нараните животното.'},
            {text: 'Повикайте незабавно спешна медицинска помощ или закарайте пострадалия в болница. Животното може да старада от бяс.'},
            {text: 'Ако в резултат от ухапването започне силно кръвотечение, спрете го (инструкции в опция "Спешна помощ при травми и рани").'},
            {text: 'Ако кръвотечението е незначително, превържете го.'}
        ], 
    }
]

export {firstAid};