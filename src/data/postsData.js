    export const postsData = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1559489110-2824bc4aa15e?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Загадка древнего леса",
            description: "Нашел в лесу странный камень с вырезанными символами. Они светятся по ночам и меняют форму при луне. Что это может быть?",
            pfp: "/pixel_user.png",
            likes: 347
        },
        {
            id: 2,
            image: "https://plus.unsplash.com/premium_photo-1671405924236-402f2c965af1?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Рецепт идеального пончика",
            description: "Три часа экспериментов и вот он - пончик с начинкой из карамельного крема и морской соли. Хрустящая корочка, тает во рту!",
            pfp: "/pixel_user.png",
            likes: 289
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=300&fit=crop",
            title: "Мой кот изобрел танец",
            description: "Снимаю на видео, как мой кот Кекс исполняет 'лунную походку' по паркету. Уже 3 миллиона просмотров на ютубе!",
            pfp: "/pixel_user.png",
            likes: 512
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1693746046775-f5f060b099ad?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Секретный уровень в старой игре",
            description: "В тетрисе 1984 года нашел скрытый уровень с танцующими блоками. Код активации: вверх-вниз-влево-вправо-A-B.",
            pfp: "/pixel_user.png",
            likes: 198
        },
        {
            id: 5,
            image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop",
            title: "Облако съело мою пиццу",
            description: "Сижу на балконе, ем пиццу, вдруг облако спускается и ШЛЮП - пицца исчезла! Кто-нибудь такое видел?",
            pfp: "/pixel_user.png",
            likes: 423
        },
        {
            id: 6,
            image: "https://images.unsplash.com/photo-1686644823126-7ed947386b77?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Мой тостер поет оперу",
            description: "Каждое утро в 7:03 мой тостер начинает петь арию из 'Кармен'. Уже научился подпевать на итальянском!",
            pfp: "./pixel_user.png",
            likes: 276
        }
    ];
    
    export async function getPosts(){
        await new Promise((resolve) => setTimeout(resolve, Math.floor(Math.random() * 3000 + 3000)));
    
        return postsData;
    }
