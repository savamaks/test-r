const tokenW = "7c63e2d8f34b65441c837dc672a1ded1501b600854bb65268d017d240c258d4ec5a4e0e2650bf362af97100ea82a4429b9f822fd302c40235ae1e9f840ad748dc3f073b9657700de0487eb35cdea420ebbd6e4d2697387441ab9ee15b57a721cf232def28bedb9e02d438373c0c8e8ea2247a682e7238b8adbf50f557d811432";

// получение списка файлов по указаному адресу
// export const requestDisk = async (link: string) => {
//     try {
//         const res = await fetch(`https://cloud-api.yandex.net/v1/disk/public/resources?public_key=https://disk.yandex.ru/d/${link}`, {
//             headers: {
//                 "Content-Type": "application/json",
//                 Authorization: `OAuth ${token}`,
//             },
//         });
//         const data = await res.json();
//         console.log(data);
//         return data;
//     } catch (error) {
//         console.log(error);
//     }
// };

export const requestDisk = async () => {
    try {
        const res = await fetch(`https://wclouds.ru/api/photos?populate=*`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${tokenW}`,
            },
        });
        const data = await res.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
};
