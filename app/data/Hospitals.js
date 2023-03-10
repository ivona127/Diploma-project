const hospitals = [
    {
        id: 1,
        name: 'МБАЛ "Княгиня Клементина"',
        latitude: '42.71297755382829',
        longitude: '23.31273541546844',
        tel: '02 926 8100',
        cases: [1, 3]
    },

    {
        id: 2,
        name: 'СБАЛДБ "Проф. Иван Митев"',
        latitude: '42.684092023073845',
        longitude: '23.30176442501803',
        tel: '02 815 4211',
        cases: [2]
    },

    {
        id: 3,
        name: 'МЦ по Детски болести',
        latitude: '42.68414525699467',
        longitude: '23.29980833780142',
        tel: '02 952 1814',
        cases: [2]
    },

    {
        id: 4,
        name: 'МБАЛ "Света Анна"',
        latitude: '42.66031653668624',
        longitude: '23.372026668408687',
        tel: '02 975 9000',
        cases: [2, 5]
    },

    {
        id: 5,
        name: 'УСБАЛЕ "Акад. Иван Пенчев"',
        latitude: '42.683990570022665',
        longitude: '23.311867111833028',
        tel: '02 895 6030',
        cases: [3]
    },

    {
        id: 6,
        name: 'УМБАЛ "Софиямед"',
        latitude: '42.66828206041422',
        longitude: '23.36441337671702',
        tel: '089 555 5444',
        cases: [3, 5, 10]
    },

    {
        id: 7,
        name: 'Първа МБАЛ "София"',
        latitude: '42.68867139362049',
        longitude: '23.322550710818188',
        tel: '02 805 9205',
        cases: [4, 7]
    },

    {
        id: 8,
        name: 'Втора МБАЛ "София"',
        latitude: '42.70634817963758',
        longitude: '23.318266942350395',
        tel: '02 915 8500',
        cases: [4, 7]
    },

    {
        id: 9,
        name: 'Военномедицинска академия',
        latitude: '42.68440675791423',
        longitude: '23.30446844041532',
        tel: '02 922 6000',
        cases: [5]
    }, 

    {
        id: 10,
        name: 'СБАЛ по ортопедия, травматология и спортна медицина "Проф. д-р Димитър Шойлев"',
        latitude: '42.66470128952727',
        longitude: '23.344270168489455',
        tel: '088 806 0408',
        cases: [6]
    },

    {
        id: 11,
        name: 'СБАЛ по ортопедия "Проф. Бойчо Бойчев"',
        latitude: '42.67485486673639',
        longitude: '23.247218681981547',
        tel: '02 818 1500',
        cases: [6]
    },

    {
        id: 12,
        name: 'МБАЛ "Сердика"',
        latitude: '42.70339718255897',
        longitude: '23.315580084377316',
        tel: '02 488 9999',
        cases: [6]
    },

    {
        id: 13,
        name: 'МБАЛ "Надежда"',
        latitude: '42.68890468931142',
        longitude: '23.274561154998885',
        tel: '02 441 7970',
        cases: [8]
    },

    {
        id: 14,
        name: 'МБАЛ "Света София"',
        latitude: '42.66006603579061',
        longitude: '23.28481472616151',
        tel: '02 818 4600',
        cases: [8]
    },

    {
        id: 15,
        name: 'Медицински комплекс "Д-р Щерев"',
        latitude: '42.70021360484447',
        longitude: '23.287368110818687',
        tel: '02 920 0901',
        cases: [8]
    },

    {
        id: 16,
        name: 'СБАЛАГ "Майчин дом"',
        latitude: '42.68380798463485',
        longitude: '23.312078668490223',
        tel: '02 917 2200',
        cases: [8]
    },

    {
        id: 17,
        name: 'Втора САГБАЛ "Шейново"',
        latitude: '42.692821636003714',
        longitude: '23.340113341507436',
        tel: '02 965 9481',
        cases: [8]
    },

    {
        id: 18,
        name: 'Национална кардиологична болница',
        latitude: '42.70634182680626',
        longitude: '23.28739238198283',
        tel: '02 921 1211',
        cases: [9]
    },

    {
        id: 19,
        name: 'Медицински център "Градска кардиология"',
        latitude: ' 42.67555020072155',
        longitude: '23.316924383834372',
        tel: '02 488 4840',
        cases: [9]
    },

    {
        id: 20,
        name: 'УМБАЛ "Св. Екатерина"',
        latitude: '42.684973069734156',
        longitude: '23.31233742506975',
        tel: '0700 12 131',
        cases: [9]
    },

    {
        id: 21,
        name: 'МЦ "Св. Георги Софийски"',
        latitude: '42.684790198596254',
        longitude: '23.304986159772053',
        tel: '02 922 5465',
        cases: [10]
    },

    {
        id: 22,
        name: 'Аджибадем Сити Клиник УМБАЛ Токуда',
        latitude: '42.665080586666974',
        longitude: '23.324922267396456',
        tel: '02 403 4000',
        cases: [1, 4, 9, 10]
    },

    {
        id: 23,
        name: 'УМБАЛ "Царица Йоанна" (ИСУЛ)',
        latitude: '42.70075393951716',
        longitude: '23.3395660893195',
        tel: '02 9432 170',
        cases: [1, 7, 9]
    },

    {
        id: 24,
        name: 'УМБАЛ "Александровска"',
        latitude: '42.685694750699845',
        longitude: '23.31128303780136',
        tel: '02 923 0592',
        cases: [1, 2, 3, 4, 5, 6, 7, 10]
    },

    {
        id: 25,
        name: 'МБАЛСМ "Николай И. Пирогов"',
        latitude: '42.69032852744321',
        longitude: '23.307414368409702',
        tel: '02 915 4411',
        cases: [1, 2, 3, 4, 5, 6, 7, 10]
    }, 
]

export {hospitals};