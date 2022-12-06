import uuid from "react-uuid";

export const serviceList = [
    {
        id: uuid(),
        name: 'Замена стекла',
        price: 21000,
    },
    {
        id: uuid(),
        name: 'Замена дисплея',
        price: 26000,
    },
];

export const productList = {
    filter: [{
        searchQuery: '',
        sort: '',
        params: [
            {
                id: 1,
                type: 'enum',
                name: "Производитель",
                valueIds: [],
            },
            {
                id: 2,
                type: 'color',
                name: "Цвет",
                valueIds: [],
            },

        ]
    }],
    categories: [
        {
            id: 1, //int
            parent_id: null,//int
            slug: 'bytovaia-tekhnika',//varchar
            name: 'Бытовая техника', //varchar
        }, {
            id: 2, //int
            parent_id: 1,//int
            slug: 'melkaia-tekhnika',//varchar
            name: 'Мелкая техника', //varchar
        }, {
            id: 6, //int
            parent_id: 2,//int
            slug: 'kukhonnye-vesy',//varchar
            name: 'Кухонные весы', //varchar
        },
        {
            id: 8, //int
            parent_id: null,//int
            slug: 'tovary-dlia-doma',//varchar
            name: 'Товары для дома', //varchar
        },
        {
            id: 9, //int
            parent_id: 8,//int
            slug: 'vse-dlia-novogo-goda',//varchar
            name: 'Все для Нового года', //varchar
        },
        {
            id: 10, //int
            parent_id: 9,//int
            slug: 'elektricheskie-girliandy',//varchar
            name: 'Электрические гирлянды', //varchar
        },
    ],
    currency: [
        'RUR', "USD"
    ],
    promo_list: [
        {
            id: 1,
            slug: 'new_year',
            name: 'Новогодняя распродажа',
            landing: 'https://market/promo/new_year'
        }, {
            id: 2,
            slug: 'default',
            name: 'Скидка!',
            landing: 'https://market/promo/sale'
        }, {
            id: 3,
            slug: 'personal',
            name: 'Только для вас!',
            landing: 'https://market/promo/for_you'
        }
    ],
    collection: [
        {
            id: 1, //bigint в базе
            is_active: 1, // bit + index
            name: 'Кухонные весы Мечта', //varchar,
            slug: 'kukhonnye-vesy-mechta', //varchar,
            price: 679.00,
            currency: 'RUR',
            promo: {
                id: 1, //int
                active_to: '2022-12-29 16:42:07', // timestamp
                type_id: 1,
                price: {
                    current_price: 654,
                    old_price: 679,
                    percent: 5
                }
            },
            preview_image: 'https://avatars.mds.yandex.net/get-marketpic/4614301/pic4fc621fb1bfe5c51e18d5d6c297092dd/200x200',//varchar,
            categoryIds: [
                1, 2, 6
            ],
        },
        {
            id: 2,
            is_active: 1,
            name: 'Гирлянда электрическая интерьерная ',
            slug: 'girlianda-elektricheskaia-interernaia',
            price: 997.00,
            currency: 'RUR',
            promo: {
                id: 1, //int
                active_to: '2022-12-29 16:42:07', // timestamp
                type_id: 1,
                price: {
                    current_price: 850,
                    old_price: 999,
                    percent: 15
                }
            },
            preview_image: 'https://avatars.mds.yandex.net/get-mpic/4367383/img_id2559250904879545358.jpeg/200x200',
            categoryIds: [
                8, 9, 10
            ]
        }
    ],
};