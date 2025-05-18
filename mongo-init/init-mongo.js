db = db.getSiblingDB('test');

// account
db = db.getSiblingDB('test');
db.account.insertMany(
    [
        {
            "_id": ObjectId("674067eac35c263bdad6c76d"),
            "user_id": ObjectId("674067eac35c263bdad6c769"),
            "role_id": ObjectId("6737252735224c690dbd21c3"),
            "password": "$2b$10$8q9IhZqMjhV8ILOi8Os3X.7H2NfJv5CzHieIgZPujzCsSPl.Qhq8C", //0987654321
            "is_ban": false,
            "forgot_password_code": "",
            "deleted": false,
            "createdAt": new Date("2024-11-22T11:15:54.607Z"),
            "updatedAt": new Date("2024-11-22T11:15:54.607Z"),
        },
        {
            "_id": ObjectId("6741a5294ccb29381f082375"),
            "user_id": ObjectId("6741a5294ccb29381f082373"),
            "role_id": ObjectId("673724fc35224c690dbd21c2"),
            "password": "$2b$10$b941a36fFFmO0RzESvJySuZywDMjbhQKWnxLDQ5OdJIjN6L9ZO3LS", //1234567890
            "is_ban": false,
            "forgot_password_code": "",
            "deleted": false,
            "createdAt": new Date("2024-11-23T09:49:29.473Z"),
            "updatedAt": new Date("2024-11-23T09:49:29.473Z"),
        },
        {
            "_id": ObjectId("6741a61d4ccb29381f082386"),
            "user_id": ObjectId("6741a61d4ccb29381f082384"),
            "role_id": ObjectId("6737252735224c690dbd21c3"),
            "password": "$2b$10$KmUWB3.uWG6fBXRMfsLtzuzR92S0GaJksafShtbKYR9ybhhspDyUW", //1234567890
            "is_ban": false,
            "forgot_password_code": "",
            "deleted": false,
            "createdAt": new Date("2024-11-23T09:53:33.870Z"),
            "updatedAt": new Date("2024-11-23T09:53:33.870Z"),
        }
    ]
);

// address
db.createCollection('address');
db.address.insertMany(
    [
        {
            _id: ObjectId("673734f63d72cc4d7206d34e"),
            user_id: ObjectId("673734f63d72cc4d7206d34a"),
            fullName: "Thái Nguyễn Thành Công",
            address: "52/8, đường HT31",
            phone_number: "0706873698",
            is_default: true,
            __v: 0
        },
        {
            _id: ObjectId("673f7710be3ed6e609ab3a7f"),
            user_id: ObjectId("673f7710be3ed6e609ab3a7b"),
            fullName: "Jake Jason",
            address: "52/8, đường HT31",
            phone_number: "0706873698",
            is_default: true,
            __v: 0
        },
        {
            _id: ObjectId("6741a61d4ccb29381f082388"),
            user_id: ObjectId("6741a61d4ccb29381f082384"),
            fullName: "Thong",
            address: "12 district",
            phone_number: "0939389667",
            is_default: true,
            __v: 0
        },
        {
            _id: ObjectId("674332ee0c792c9da04fcbd5"),
            user_id: ObjectId("6741a61d4ccb29381f082384"),
            fullName: "Thong",
            address: "12 district",
            phone_number: "0939389667",
            is_default: false,
            __v: 0
        },
        {
            _id: ObjectId("6743fe78770fb2a999766be6"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            fullName: "Cong Day",
            address: "52/8, đường HT31",
            phone_number: "0706873698",
            is_default: true,
            __v: 0
        },
        {
            _id: ObjectId("6743fe8f770fb2a999766bed"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            fullName: "Thái Nguyễn Thành Công",
            address: "Admin Address",
            phone_number: "0706873698",
            is_default: false,
            __v: 0
        },
        {
            _id: ObjectId("674ab2c28191eaaa221fbc60"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            fullName: "Trúc",
            address: "52/8, HT45",
            phone_number: "0147852369",
            is_default: false,
            __v: 0
        },
        {
            _id: ObjectId("674c6f1b135a45393ac38270"),
            user_id: ObjectId("674c6f1b135a45393ac3826c"),
            fullName: "Jack Johnson",
            address: "HT15 district 12",
            phone_number: "0356779199",
            is_default: true,
            __v: 0
        },
        {
            _id: ObjectId("67569904f29ff44f35f902da"),
            user_id: ObjectId("674067eac35c263bdad6c769"),
            fullName: "Công ĐRL",
            address: "19, Tan Thoi Hiep, 12 district",
            phone_number: "0365896417",
            is_default: true,
            __v: 0
        }
    ]
)

// cart
db.createCollection('cart');
// db.cart.insertMany([])

// coupon
db.createCollection('coupon');
db.coupon.insertMany(
    [
        {
            _id: ObjectId("6741b389febecf90784bc23e"),
            coupon_name: "Discount 10%",
            description: "Get a 10% discount on your next purchase.",
            code: "GIAM10",
            createdAt: new Date("2024-01-01T10:00:00.000Z"),
            updatedAt: new Date("2024-12-02T11:52:24.632Z"),
            discount: 10,
            maxUsage: 10,                // Số lượt sử dụng tối đa (bắt buộc theo đề)
            usedCount: 0                 // Số lượt đã sử dụng
        },
        {
            _id: ObjectId("6741b389febecf90784bc23f"),
            coupon_name: "Free Shipping",
            description: "Enjoy free shipping on orders over $50.",
            code: "VAN50",
            createdAt: new Date("2024-02-01T12:00:00Z"),
            updatedAt: new Date("2024-02-01T12:00:00Z"),
            discount: 5,
            maxUsage: 10,                // Số lượt sử dụng tối đa (bắt buộc theo đề)
            usedCount: 0                 // Số lượt đã sử dụng
        },
        {
            _id: ObjectId("6741b389febecf90784bc240"),
            coupon_name: "Holiday Special",
            description: "Save $20 on purchases over $100 during the holiday season.",
            code: "GIAM20",
            createdAt: new Date("2024-11-01T15:00:00Z"),
            updatedAt: new Date("2024-11-01T15:00:00Z"),
            discount: 20,
            maxUsage: 10,                // Số lượt sử dụng tối đa (bắt buộc theo đề)
            usedCount: 0  
        },
        {
            _id: ObjectId("6741b389febecf90784bc241"),
            coupon_name: "Discount 30%",
            description: "Get a 30% discount on your next purchase.",
            code: "GIAM30",
            createdAt: new Date("2024-01-01T10:00:00Z"),
            updatedAt: new Date("2024-01-01T10:00:00Z"),
            discount: 30,
            maxUsage: 2,                // Số lượt sử dụng tối đa (bắt buộc theo đề)
            usedCount: 0  
        }
    ]
)

// comment
db.createCollection('comment');
db.comment.insertMany(
    [
        {
            _id: ObjectId("6745a54598c37682a859650a"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            content: "ok",
            deleted: false,
            createdAt: new Date("2024-11-26T10:39:01.149Z"),
            updatedAt: new Date("2024-11-26T10:39:01.149Z"),
        },
        {
            _id: ObjectId("6745a876a24c46141ed3bb0d"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            content: "It's time for watch",
            deleted: false,
            createdAt: new Date("2024-11-26T10:52:38.282Z"),
            updatedAt: new Date("2024-11-26T10:52:38.282Z"),
        },
        {
            _id: ObjectId("6745a8e1e76633d70457c8f3"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            content: "nahhh",
            deleted: false,
            createdAt: new Date("2024-11-26T10:54:25.661Z"),
            updatedAt: new Date("2024-11-26T10:54:25.661Z"),
        },
        {
            _id: ObjectId("6745a8ede76633d70457c8f5"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            content: "nahhh",
            deleted: false,
            createdAt: new Date("2024-11-26T10:54:37.791Z"),
            updatedAt: new Date("2024-11-26T10:54:37.791Z"),
        },
        {
            _id: ObjectId("6745a8f0e76633d70457c8f7"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            content: "nahhh",
            deleted: false,
            createdAt: new Date("2024-11-26T10:54:40.680Z"),
            updatedAt: new Date("2024-11-26T10:54:40.680Z"),
        },
        {
            _id: ObjectId("6745aa6de76633d70457c911"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            content: "yess sir",
            deleted: false,
            createdAt: new Date("2024-11-26T11:01:01.836Z"),
            updatedAt: new Date("2024-11-26T11:01:01.836Z"),
        },
        {
            _id: ObjectId("674686fd4975aec49b3cc9da"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a9"),
            content: "oke, gud job bro",
            deleted: false,
            createdAt: new Date("2024-11-27T02:42:05.395Z"),
            updatedAt: new Date("2024-11-27T02:42:05.395Z"),
        },
        {
            _id: ObjectId("67468ab54975aec49b3cca42"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            content: "yehh",
            deleted: false,
            createdAt: new Date("2024-11-27T02:57:57.989Z"),
            updatedAt: new Date("2024-11-27T02:57:57.989Z"),
        },
        {
            _id: ObjectId("674ef56b6dacc8b59e4f851b"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151aa"),
            content: "ok sir",
            deleted: false,
            createdAt: new Date("2024-12-03T12:11:23.510Z"),
            updatedAt: new Date("2024-12-03T12:11:23.510Z"),
        },
        {
            _id: ObjectId("674ef5776dacc8b59e4f851d"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151aa"),
            content: "gud product",
            deleted: false,
            createdAt: new Date("2024-12-03T12:11:35.768Z"),
            updatedAt: new Date("2024-12-03T12:11:35.768Z"),
        },
        {
            _id: ObjectId("674fdee442d9564f928845d1"),
            user_id: ObjectId("674067eac35c263bdad6c769"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            content: "oke sir",
            deleted: false,
            createdAt: new Date("2024-12-04T04:47:32.943Z"),
            updatedAt: new Date("2024-12-04T04:47:32.944Z"),
        },
        {
            _id: ObjectId("674fdf4499909f5f022e0e8f"),
            user_id: ObjectId("674067eac35c263bdad6c769"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            content: "gud product",
            deleted: false,
            createdAt: new Date("2024-12-04T04:49:08.349Z"),
            updatedAt: new Date("2024-12-04T04:49:08.349Z"),
        },
        {
            _id: ObjectId("674fdf7199909f5f022e0e9e"),
            user_id: ObjectId("674067eac35c263bdad6c769"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            content: "ok",
            deleted: false,
            createdAt: new Date("2024-12-04T04:49:53.474Z"),
            updatedAt: new Date("2024-12-04T04:49:53.474Z"),
        },
        {
            _id: ObjectId("674fdfa599909f5f022e0eab"),
            user_id: ObjectId("674067eac35c263bdad6c769"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            content: "check",
            deleted: false,
            createdAt: new Date("2024-12-04T04:50:45.799Z"),
            updatedAt: new Date("2024-12-04T04:50:45.799Z"),
        },
        {
            _id: ObjectId("675481b88c060f60080c67b4"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            content: "ok sir",
            deleted: false,
            createdAt: new Date("2024-12-07T17:11:20.359Z"),
            updatedAt: new Date("2024-12-07T17:11:20.359Z"),
        },
        {
            _id: ObjectId("675481d88c060f60080c67c3"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            content: "ok",
            deleted: false,
            createdAt: new Date("2024-12-07T17:11:52.865Z"),
            updatedAt: new Date("2024-12-07T17:11:52.865Z"),
        },
        {
            _id: ObjectId("675482d394940a4b7fd0ec93"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            content: "gud product",
            deleted: false,
            createdAt: new Date("2024-12-07T17:16:03.753Z"),
            updatedAt: new Date("2024-12-07T17:16:03.753Z"),
        },
        {
            _id: ObjectId("6754832394940a4b7fd0eca8"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            content: "ok perfect",
            deleted: false,
            createdAt: new Date("2024-12-07T17:17:23.589Z"),
            updatedAt: new Date("2024-12-07T17:17:23.589Z"),
        },
        {
            _id: ObjectId("6754838c0e58b2db0ac6feb4"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            content: "gudddd",
            deleted: false,
            createdAt: new Date("2024-12-07T17:19:08.095Z"),
            updatedAt: new Date("2024-12-07T17:19:08.095Z"),
        },
        {
            _id: ObjectId("675483c763f6d3f15fd94aed"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            content: "that's great !",
            deleted: false,
            createdAt: new Date("2024-12-07T17:20:07.465Z"),
            updatedAt: new Date("2024-12-07T17:20:07.466Z"),
        },
        {
            _id: ObjectId("675483cd63f6d3f15fd94af9"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            content: "that's great !",
            deleted: false,
            createdAt: new Date("2024-12-07T17:20:13.749Z"),
            updatedAt: new Date("2024-12-07T17:20:13.749Z"),
        },
        {
            _id: ObjectId("67548453dd77929dbe88f4b5"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            content: "ok sirrrr",
            deleted: false,
            createdAt: new Date("2024-12-07T17:22:27.035Z"),
            updatedAt: new Date("2024-12-07T17:22:27.036Z"),
        },
        {
            _id: ObjectId("675484b018defbbb85016e5f"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            content: "oke sirrrrrr",
            deleted: false,
            createdAt: new Date("2024-12-07T17:24:00.412Z"),
            updatedAt: new Date("2024-12-07T17:24:00.412Z"),
        },
        {
            _id: ObjectId("675488cd0d29ad8cbf52b19c"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            content: "ok",
            deleted: false,
            createdAt: new Date("2024-12-07T17:41:33.558Z"),
            updatedAt: new Date("2024-12-07T17:41:33.558Z"),
        },
        {
            _id: ObjectId("675488d20d29ad8cbf52b1a1"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            content: "oke",
            deleted: false,
            createdAt: new Date("2024-12-07T17:41:38.470Z"),
            updatedAt: new Date("2024-12-07T17:41:38.470Z"),
        },
        {
            _id: ObjectId("675488e40d29ad8cbf52b1bd"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            content: "yehh",
            deleted: false,
            createdAt: new Date("2024-12-07T17:41:56.372Z"),
            updatedAt: new Date("2024-12-07T17:41:56.372Z"),
        },
        {
            _id: ObjectId("675489c805fc1b88d5f2cecd"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            content: "oke",
            deleted: false,
            createdAt: new Date("2024-12-07T17:45:44.792Z"),
            updatedAt: new Date("2024-12-07T17:45:44.792Z"),
        },
        {
            _id: ObjectId("67548a5405fc1b88d5f2cf0f"),
            user_id: ObjectId("674067eac35c263bdad6c769"),
            product_id: ObjectId("674138636c0973f433b151a6"),
            content: "oke",
            deleted: false,
            createdAt: new Date("2024-12-07T17:48:04.691Z"),
            updatedAt: new Date("2024-12-07T17:48:04.691Z"),
        },
        {
            _id: ObjectId("67569721f552000b2bae3e77"),
            user_id: ObjectId("674067eac35c263bdad6c769"),
            product_id: ObjectId("674138636c0973f433b151a9"),
            content: "it's oke bro",
            deleted: false,
            createdAt: new Date("2024-12-09T07:07:13.262Z"),
            updatedAt: new Date("2024-12-09T07:07:13.262Z"),
        },
        {
            _id: ObjectId("67569fcdb4a7648736a80dfd"),
            user_id: ObjectId("674067eac35c263bdad6c769"),
            product_id: ObjectId("674138636c0973f433b151ac"),
            content: "noice yo !!",
            deleted: false,
            createdAt: new Date("2024-12-09T07:44:13.527Z"),
            updatedAt: new Date("2024-12-09T07:44:13.527Z"),
        },
        {
            _id: ObjectId("6756a005b4a7648736a80e27"),
            user_id: ObjectId("674067eac35c263bdad6c769"),
            product_id: ObjectId("674138636c0973f433b151c3"),
            content: "Oh dear, fantastic !",
            deleted: false,
            createdAt: new Date("2024-12-09T07:45:09.615Z"),
            updatedAt: new Date("2024-12-09T07:45:09.615Z"),
        },
        {
            _id: ObjectId("6756a0ffb4a7648736a80e7c"),
            user_id: ObjectId("6741a61d4ccb29381f082384"),
            product_id: ObjectId("674138636c0973f433b151cf"),
            content: "oh my god, that's so awesome, yo !",
            deleted: false,
            createdAt: new Date("2024-12-09T07:49:19.124Z"),
            updatedAt: new Date("2024-12-09T07:49:19.124Z"),
        },
        {
            _id: ObjectId("6756a1b6b4a7648736a80e91"),
            user_id: ObjectId("6741a61d4ccb29381f082384"),
            product_id: ObjectId("674138636c0973f433b151cf"),
            content: "noice yo !!!!",
            deleted: false,
            createdAt: new Date("2024-12-09T07:52:22.951Z"),
            updatedAt: new Date("2024-12-09T07:52:22.951Z"),
        },
        {
            _id: ObjectId("6756a3af5b0ba3712239a530"),
            user_id: ObjectId("6741a61d4ccb29381f082384"),
            product_id: ObjectId("674138636c0973f433b151c7"),
            content: "ohhh, goddd, it's soo fantastic",
            deleted: false,
            createdAt: new Date("2024-12-09T08:00:47.582Z"),
            updatedAt: new Date("2024-12-09T08:00:47.582Z"),
        },
        {
            _id: ObjectId("6756a4df5b0ba3712239a54a"),
            user_id: ObjectId("6741a61d4ccb29381f082384"),
            product_id: ObjectId("674138636c0973f433b151ab"),
            content: "good products",
            deleted: false,
            createdAt: new Date("2024-12-09T08:05:51.165Z"),
            updatedAt: new Date("2024-12-09T08:05:51.166Z"),
        },
        {
            _id: ObjectId("6756a7310dad16005ce8b28b"),
            user_id: ObjectId("6741a61d4ccb29381f082384"),
            product_id: ObjectId("674138636c0973f433b151c5"),
            content: "oh dearrrr",
            deleted: false,
            createdAt: new Date("2024-12-09T08:15:45.915Z"),
            updatedAt: new Date("2024-12-09T08:15:45.915Z"),
        },
        {
            _id: ObjectId("6756b4e90dad16005ce8b5e3"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151ce"),
            content: "coollll",
            deleted: false,
            createdAt: new Date("2024-12-09T09:14:17.331Z"),
            updatedAt: new Date("2024-12-09T09:14:17.331Z"),
            __v: 0
        },
        {
            _id: ObjectId("6756bf87204903ae7dc1cffc"),
            user_id: ObjectId("674067eac35c263bdad6c769"),
            product_id: ObjectId("674138636c0973f433b151b5"),
            content: "great yo !",
            deleted: false,
            createdAt: new Date("2024-12-09T09:59:35.190Z"),
            updatedAt: new Date("2024-12-09T09:59:35.190Z"),
            __v: 0
        }
    ]
)

// order
db.createCollection('order');
db.order.insertMany(
    [
        {
            _id: ObjectId("674b29753521e6fef9223b1c"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            coupon_id: null,
            address_id: ObjectId("6743fe78770fb2a999766be6"),
            status: "Shipping",
            tax: 10,
            shippingFee: 6,
            createdAt: new Date("2024-11-30T15:05:24.120Z"),
            updatedAt: new Date("2024-11-30T15:05:24.120Z"),
            deleted: false,
            __v: 0
        },
        {
            _id: ObjectId("674c0c5aad080d212b4b1a95"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            coupon_id: null,
            address_id: ObjectId("6743fe78770fb2a999766be6"),
            status: "Shipping",
            tax: 10,
            shippingFee: 6,
            createdAt: new Date("2024-11-29T07:19:59.733Z"),
            updatedAt: new Date("2024-11-29T07:19:59.733Z"),
            deleted: false,
            __v: 0
        },
        {
            _id: ObjectId("674c0e46ad080d212b4b1acf"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            coupon_id: null,
            address_id: ObjectId("6743fe78770fb2a999766be6"),
            status: "Confirmed",
            tax: 10,
            shippingFee: 6,
            createdAt: new Date("2024-12-01T07:28:01.752Z"),
            updatedAt: new Date("2024-12-01T07:28:01.752Z"),
            deleted: false,
            __v: 0
        },
        {
            _id: ObjectId("674c1fe8a50614d7a28b4583"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            coupon_id: null,
            address_id: ObjectId("6743fe78770fb2a999766be6"),
            status: "Shipping",
            tax: 10,
            shippingFee: 6,
            createdAt: new Date("2024-11-11T08:36:02.707Z"),
            updatedAt: new Date("2024-11-11T08:36:02.707Z"),
            deleted: false,
            __v: 0
        },
        {
            _id: ObjectId("674c2082a50614d7a28b45c1"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            coupon_id: null,
            address_id: ObjectId("6743fe78770fb2a999766be6"),
            status: "Confirmed",
            tax: 10,
            shippingFee: 10,
            createdAt: new Date("2024-10-29T08:39:04.034Z"),
            updatedAt: new Date("2024-10-10T08:39:04.034Z"),
            deleted: false,
            __v: 0
        },
        {
            _id: ObjectId("674c54411b90b0d7e35c72c6"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            coupon_id: null,
            address_id: ObjectId("6743fe78770fb2a999766be6"),
            status: "Confirmed",
            tax: 10,
            shippingFee: 6,
            createdAt: new Date("2024-11-01T12:19:24.527Z"),
            updatedAt: new Date("2024-11-01T12:19:24.527Z"),
            deleted: false,
            __v: 0
        },
        {
            _id: ObjectId("674c635ce5063c9398680536"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            coupon_id: null,
            address_id: ObjectId("674c635ce5063c9398680534"),
            status: "Pending",
            tax: 10,
            shippingFee: 6,
            createdAt: new Date("2024-10-21T13:23:40.717Z"),
            updatedAt: new Date("2024-10-21T13:23:40.717Z"),
            deleted: false,
            __v: 0
        },
        {
            _id: ObjectId("674c63ede5063c939868054e"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            coupon_id: null,
            address_id: ObjectId("674c63ede5063c939868054c"),
            status: "Pending",
            tax: 10,
            shippingFee: 6,
            createdAt: new Date("2024-10-01T13:26:05.109Z"),
            updatedAt: new Date("2024-10-01T13:26:05.109Z"),
            deleted: false,
            __v: 0
        },
        {
            _id: ObjectId("674c6f1b135a45393ac38272"),
            user_id: ObjectId("674c6f1b135a45393ac3826c"),
            coupon_id: null,
            address_id: ObjectId("674c6f1b135a45393ac38270"),
            status: "Confirmed",
            tax: 10,
            shippingFee: 10,
            createdAt: new Date("2024-12-01T14:13:47.738Z"),
            updatedAt: new Date("2024-12-01T14:13:47.738Z"),
            deleted: false,
            __v: 0
        },
        {
            _id: ObjectId("674efc3fe6ca0e50af3e4f46"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            coupon_id: null,
            address_id: ObjectId("6743fe78770fb2a999766be6"),
            status: "Confirmed",
            tax: 10,
            shippingFee: 10,
            createdAt: new Date("2024-12-03T12:41:14.514Z"),
            updatedAt: new Date("2024-12-03T12:41:14.514Z"),
            deleted: false,
            __v: 0
        },
        {
            _id: ObjectId("6756975bf552000b2bae3e86"),
            user_id: ObjectId("674067eac35c263bdad6c769"),
            coupon_id: null,
            address_id: ObjectId("67569904f29ff44f35f902da"),
            status: "Pending",
            tax: 10,
            shippingFee: 6,
            createdAt: new Date("2024-12-07T07:21:00.502Z"),
            updatedAt: new Date("2024-12-07T07:21:00.502Z"),
            deleted: false,
            __v: 0
        },
        {
            _id: ObjectId("6756a03db4a7648736a80e37"),
            user_id: ObjectId("674067eac35c263bdad6c769"),
            coupon_id: null,
            address_id: ObjectId("67569904f29ff44f35f902da"),
            status: "Pending",
            tax: 10,
            shippingFee: 10,
            createdAt: new Date("2024-12-09T07:47:27.648Z"),
            updatedAt: new Date("2024-12-09T07:47:27.648Z"),
            deleted: false,
            __v: 0
        },
        {
            _id: ObjectId("6756a1dab4a7648736a80e9e"),
            user_id: ObjectId("6741a61d4ccb29381f082384"),
            coupon_id: null,
            address_id: ObjectId("6741a61d4ccb29381f082388"),
            status: "Pending",
            tax: 10,
            shippingFee: 6,
            createdAt: new Date("2024-11-19T07:53:27.976Z"),
            updatedAt: new Date("2024-11-19T07:53:27.976Z"),
            deleted: false,
            __v: 0
        },
        {
            _id: ObjectId("6756a4eb5b0ba3712239a556"),
            user_id: ObjectId("6741a61d4ccb29381f082384"),
            coupon_id: null,
            address_id: ObjectId("6741a61d4ccb29381f082388"),
            status: "Pending",
            tax: 10,
            shippingFee: 10,
            createdAt: new Date("2024-12-02T08:06:14.012Z"),
            updatedAt: new Date("2024-12-02T08:06:14.012Z"),
            deleted: false,
            __v: 0
        },
        {
            _id: ObjectId("6756a7450dad16005ce8b29a"),
            user_id: ObjectId("6741a61d4ccb29381f082384"),
            coupon_id: null,
            address_id: ObjectId("6741a61d4ccb29381f082388"),
            status: "Pending",
            tax: 10,
            shippingFee: 10,
            createdAt: new Date("2024-12-09T08:16:22.442Z"),
            updatedAt: new Date("2024-12-09T08:16:22.442Z"),
            deleted: false,
            __v: 0
        },
        {
            _id: ObjectId("6756b3330dad16005ce8b506"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            coupon_id: null,
            address_id: ObjectId("6743fe8f770fb2a999766bed"),
            status: "Pending",
            tax: 10,
            shippingFee: 10,
            createdAt: new Date("2024-12-05T09:07:13.853Z"),
            updatedAt: new Date("2024-12-05T09:07:13.853Z"),
            deleted: false,
            __v: 0
        },
        {
            _id: ObjectId("6756b36c0dad16005ce8b54f"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            coupon_id: ObjectId("6741b389febecf90784bc23e"),
            address_id: ObjectId("6743fe8f770fb2a999766bed"),
            status: "Pending",
            tax: 10,
            shippingFee: 6,
            createdAt: new Date("2024-12-04T09:08:07.158Z"),
            updatedAt: new Date("2024-12-04T09:08:07.158Z"),
            deleted: false,
            __v: 0
        },
        {
            _id: ObjectId("6756b5000dad16005ce8b5f5"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            coupon_id: ObjectId("6741b389febecf90784bc241"),
            address_id: ObjectId("674ab2c28191eaaa221fbc60"),
            status: "Pending",
            tax: 10,
            shippingFee: 6,
            createdAt: new Date("2024-11-23T09:15:00.273Z"),
            updatedAt: new Date("2024-11-23T09:15:00.273Z"),
            deleted: false,
            __v: 0
        },
        {
            _id: ObjectId("6756b5770dad16005ce8b63d"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            coupon_id: null,
            address_id: ObjectId("6743fe78770fb2a999766be6"),
            status: "Pending",
            tax: 10,
            shippingFee: 10,
            createdAt: new Date("2024-10-12T09:16:47.697Z"),
            updatedAt: new Date("2024-10-12T09:16:47.697Z"),
            deleted: false,
            __v: 0
        },
        {
            _id: ObjectId("6756b9ed0dad16005ce8b679"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            coupon_id: ObjectId("6741b389febecf90784bc23e"),
            address_id: ObjectId("6743fe78770fb2a999766be6"),
            status: "Pending",
            tax: 10,
            shippingFee: 10,
            createdAt: new Date("2024-12-06T09:35:55.856Z"),
            updatedAt: new Date("2024-12-06T09:35:55.856Z"),
            deleted: false,
            __v: 0
        },
        {
            _id: ObjectId("6756bf00204903ae7dc1cfc8"),
            user_id: ObjectId("674067eac35c263bdad6c769"),
            coupon_id: null,
            address_id: ObjectId("67569904f29ff44f35f902da"),
            status: "Pending",
            tax: 10,
            shippingFee: 10,
            createdAt: new Date("2024-10-23T09:59:06.076Z"),
            updatedAt: new Date("2024-10-23T09:59:06.076Z"),
            deleted: false,
            __v: 0
        },
        {
            _id: ObjectId("6756bf95204903ae7dc1d00b"),
            user_id: ObjectId("674067eac35c263bdad6c769"),
            coupon_id: null,
            address_id: ObjectId("67569904f29ff44f35f902da"),
            status: "Pending",
            tax: 10,
            shippingFee: 6,
            createdAt: new Date("2024-10-16T09:59:55.071Z"),
            updatedAt: new Date("2024-10-16T09:59:55.071Z"),
            deleted: false,
            __v: 0
        }
    ]
)

// order details
db.createCollection('order_details');
db.order_details.insertMany(
    [
        {
            "_id": ObjectId("674b29753521e6fef9223b1f"),
            "order_id": ObjectId("674b29753521e6fef9223b1c"),
            "product_variant_id": ObjectId("6745d433a409da88028f01b2"),
            "quantity": 1
        },
        {
            "_id": ObjectId("674c0c5aad080d212b4b1a98"),
            "order_id": ObjectId("674c0c5aad080d212b4b1a95"),
            "product_variant_id": ObjectId("6745d433a409da88028f01b2"),
            "quantity": 1
        },
        {
            "_id": ObjectId("674c0e46ad080d212b4b1ad3"),
            "order_id": ObjectId("674c0e46ad080d212b4b1acf"),
            "product_variant_id": ObjectId("6745d433a409da88028f01b2"),
            "quantity": 1
        },
        {
            "_id": ObjectId("674c0e46ad080d212b4b1ad4"),
            "order_id": ObjectId("674c0e46ad080d212b4b1acf"),
            "product_variant_id": ObjectId("6745d433a409da88028f01b6"),
            "quantity": 1
        },
        {
            "_id": ObjectId("674c1fe8a50614d7a28b4587"),
            "order_id": ObjectId("674c1fe8a50614d7a28b4583"),
            "product_variant_id": ObjectId("6745d433a409da88028f01b2"),
            "quantity": 1
        },
        {
            "_id": ObjectId("674c1fe8a50614d7a28b4588"),
            "order_id": ObjectId("674c1fe8a50614d7a28b4583"),
            "product_variant_id": ObjectId("6745d433a409da88028f01bc"),
            "quantity": 1
        },
        {
            "_id": ObjectId("674c2082a50614d7a28b45c5"),
            "order_id": ObjectId("674c2082a50614d7a28b45c1"),
            "product_variant_id": ObjectId("6745d433a409da88028f01be"),
            "quantity": 1
        },
        {
            "_id": ObjectId("674c2082a50614d7a28b45c6"),
            "order_id": ObjectId("674c2082a50614d7a28b45c1"),
            "product_variant_id": ObjectId("6745d433a409da88028f01b6"),
            "quantity": 1
        },
        {
            "_id": ObjectId("674c54411b90b0d7e35c72c9"),
            "order_id": ObjectId("674c54411b90b0d7e35c72c6"),
            "product_variant_id": ObjectId("6745d433a409da88028f01c3"),
            "quantity": 1
        },
        {
            "_id": ObjectId("674c635ce5063c9398680538"),
            "order_id": ObjectId("674c635ce5063c9398680536"),
            "product_variant_id": ObjectId("6745d433a409da88028f01b2"),
            "quantity": 1
        },
        {
            "_id": ObjectId("674c635ce5063c9398680539"),
            "order_id": ObjectId("674c635ce5063c9398680536"),
            "product_variant_id": ObjectId("6745d433a409da88028f01b8"),
            "quantity": 1
        },
        {
            "_id": ObjectId("674c63ede5063c9398680550"),
            "order_id": ObjectId("674c63ede5063c939868054e"),
            "product_variant_id": ObjectId("6745d433a409da88028f01b2"),
            "quantity": 1
        },
        {
            "_id": ObjectId("674c63ede5063c9398680551"),
            "order_id": ObjectId("674c63ede5063c939868054e"),
            "product_variant_id": ObjectId("6745d433a409da88028f01b8"),
            "quantity": 1
        },
        {
            "_id": ObjectId("674c64f8e5063c939868058b"),
            "order_id": ObjectId("674c64f8e5063c9398680589"),
            "product_variant_id": ObjectId("6745d433a409da88028f01b4"),
            "quantity": 1
        },
        {
            "_id": ObjectId("674c6f1b135a45393ac38274"),
            "order_id": ObjectId("674c6f1b135a45393ac38272"),
            "product_variant_id": ObjectId("6745d433a409da88028f01b2"),
            "quantity": 1
        },
        {
            "_id": ObjectId("674efc3fe6ca0e50af3e4f49"),
            "order_id": ObjectId("674efc3fe6ca0e50af3e4f46"),
            "product_variant_id": ObjectId("6745d433a409da88028f01b2"),
            "quantity": 1
        },
        {
            "_id": ObjectId("6756975bf552000b2bae3e89"),
            "order_id": ObjectId("6756975bf552000b2bae3e86"),
            "product_variant_id": ObjectId("6745d433a409da88028f01bf"),
            "quantity": 2
        },
        {
            "_id": ObjectId("6756a03db4a7648736a80e3a"),
            "order_id": ObjectId("6756a03db4a7648736a80e37"),
            "product_variant_id": ObjectId("6745d433a409da88028f01fa"),
            "quantity": 2
        },
        {
            "_id": ObjectId("6756a1dab4a7648736a80ea1"),
            "order_id": ObjectId("6756a1dab4a7648736a80e9e"),
            "product_variant_id": ObjectId("6745d433a409da88028f0205"),
            "quantity": 1
        },
        {
            "_id": ObjectId("6756a4eb5b0ba3712239a559"),
            "order_id": ObjectId("6756a4eb5b0ba3712239a556"),
            "product_variant_id": ObjectId("6745d433a409da88028f01c5"),
            "quantity": 1
        },
        {
            "_id": ObjectId("6756a7450dad16005ce8b29d"),
            "order_id": ObjectId("6756a7450dad16005ce8b29a"),
            "product_variant_id": ObjectId("6745d433a409da88028f01fc"),
            "quantity": 1
        },
        {
            "_id": ObjectId("6756aac30dad16005ce8b33f"),
            "order_id": ObjectId("6756aac30dad16005ce8b33c"),
            "product_variant_id": ObjectId("6745d433a409da88028f01ff"),
            "quantity": 1
        },
        {
            "_id": ObjectId("6756abf30dad16005ce8b383"),
            "order_id": ObjectId("6756abf30dad16005ce8b380"),
            "product_variant_id": ObjectId("6745d433a409da88028f01fd"),
            "quantity": 2
        },
        {
            "_id": ObjectId("6756ac520dad16005ce8b3ce"),
            "order_id": ObjectId("6756ac520dad16005ce8b3cb"),
            "product_variant_id": ObjectId("6745d433a409da88028f01da"),
            "quantity": 1
        },
        {
            "_id": ObjectId("6756ad430dad16005ce8b42e"),
            "order_id": ObjectId("6756ad430dad16005ce8b42a"),
            "product_variant_id": ObjectId("6745d433a409da88028f01fb"),
            "quantity": 1
        },
        {
            "_id": ObjectId("6756ad430dad16005ce8b42f"),
            "order_id": ObjectId("6756ad430dad16005ce8b42a"),
            "product_variant_id": ObjectId("6745d433a409da88028f01c2"),
            "quantity": 3
        },
        {
            "_id": ObjectId("6756b13f0dad16005ce8b473"),
            "order_id": ObjectId("6756b13f0dad16005ce8b471"),
            "product_variant_id": ObjectId("6745d433a409da88028f01ec"),
            "quantity": 1
        },
        {
            "_id": ObjectId("6756b3330dad16005ce8b509"),
            "order_id": ObjectId("6756b3330dad16005ce8b506"),
            "product_variant_id": ObjectId("6745d433a409da88028f01fd"),
            "quantity": 1
        },
        {
            "_id": ObjectId("6756b36c0dad16005ce8b552"),
            "order_id": ObjectId("6756b36c0dad16005ce8b54f"),
            "product_variant_id": ObjectId("6745d433a409da88028f01c8"),
            "quantity": 1
        },
        {
            "_id": ObjectId("6756b5000dad16005ce8b5f8"),
            "order_id": ObjectId("6756b5000dad16005ce8b5f5"),
            "product_variant_id": ObjectId("6745d433a409da88028f0204"),
            "quantity": 1
        },
        {
            "_id": ObjectId("6756b5770dad16005ce8b640"),
            "order_id": ObjectId("6756b5770dad16005ce8b63d"),
            "product_variant_id": ObjectId("6745d433a409da88028f01ef"),
            "quantity": 3
        },
        {
            "_id": ObjectId("6756b9ed0dad16005ce8b67c"),
            "order_id": ObjectId("6756b9ed0dad16005ce8b679"),
            "product_variant_id": ObjectId("6745d433a409da88028f01c7"),
            "quantity": 2
        },
        {
            "_id": ObjectId("6756bf00204903ae7dc1cfcb"),
            "order_id": ObjectId("6756bf00204903ae7dc1cfc8"),
            "product_variant_id": ObjectId("6745d433a409da88028f01eb"),
            "quantity": 1
        },
        {
            "_id": ObjectId("6756bf95204903ae7dc1d00e"),
            "order_id": ObjectId("6756bf95204903ae7dc1d00b"),
            "product_variant_id": ObjectId("6745d433a409da88028f01db"),
            "quantity": 1
        },
        {
            "_id": ObjectId("6756c001204903ae7dc1d052"),
            "order_id": ObjectId("6756c001204903ae7dc1d04f"),
            "product_variant_id": ObjectId("6745d433a409da88028f01dd"),
            "quantity": 1
        }
    ]
)

// order status
db.createCollection('order_status');
db.order_status.insertMany(
    [
        {
            _id: ObjectId("6741b3abfebecf90784bc244"),
            status: "Pending"
        },
        {
            _id: ObjectId("6741b3abfebecf90784bc245"),
            status: "Confirmed"
        },
        {
            _id: ObjectId("6741b3abfebecf90784bc246"),
            status: "Shipping"
        },
        {
            _id: ObjectId("6741b3abfebecf90784bc247"),
            status: "Delivered"
        }
    ]
)

// order status details
db.createCollection('order_status_details');
db.order_status_details.insertMany(
    [
        {
            _id: ObjectId("674b29b43521e6fef9223b2b"),
            order_id: ObjectId("674b29753521e6fef9223b1c"),
            status_id: ObjectId("6741b3abfebecf90784bc244"),
            createdAt: new Date("2024-11-30T15:05:24.168Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("674b29b43521e6fef9223b2c"),
            order_id: ObjectId("674b29753521e6fef9223b1c"),
            status_id: ObjectId("6741b3abfebecf90784bc245"),
            createdAt: new Date("2024-12-02T16:15:04.180Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("674b29b43521e6fef9223b2d"),
            order_id: ObjectId("674b29753521e6fef9223b1c"),
            status_id: ObjectId("6741b3abfebecf90784bc246"),
            createdAt: new Date("2024-12-02T16:15:36.244Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("674b29b43521e6fef9223b2e"),
            order_id: ObjectId("674b29753521e6fef9223b1c"),
            status_id: ObjectId("6741b3abfebecf90784bc247"),
            createdAt: new Date("2024-12-02T15:50:38.135Z"),
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("674c0e1fad080d212b4b1aa8"),
            order_id: ObjectId("674c0c5aad080d212b4b1a95"),
            status_id: ObjectId("6741b3abfebecf90784bc244"),
            createdAt: new Date("2024-12-01T07:19:59.758Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("674c0e1fad080d212b4b1aa9"),
            order_id: ObjectId("674c0c5aad080d212b4b1a95"),
            status_id: ObjectId("6741b3abfebecf90784bc245"),
            createdAt: new Date("2024-12-02T16:01:08.766Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("674c0e1fad080d212b4b1aaa"),
            order_id: ObjectId("674c0c5aad080d212b4b1a95"),
            status_id: ObjectId("6741b3abfebecf90784bc246"),
            createdAt: new Date("2024-12-02T16:01:12.146Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("674c0e1fad080d212b4b1aab"),
            order_id: ObjectId("674c0c5aad080d212b4b1a95"),
            status_id: ObjectId("6741b3abfebecf90784bc247"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("674c1001ad080d212b4b1ae4"),
            order_id: ObjectId("674c0e46ad080d212b4b1acf"),
            status_id: ObjectId("6741b3abfebecf90784bc244"),
            createdAt: new Date("2024-12-01T07:28:01.758Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("674c1001ad080d212b4b1ae5"),
            order_id: ObjectId("674c0e46ad080d212b4b1acf"),
            status_id: ObjectId("6741b3abfebecf90784bc245"),
            createdAt: new Date("2024-12-02T16:17:21.236Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("674c1001ad080d212b4b1ae6"),
            order_id: ObjectId("674c0e46ad080d212b4b1acf"),
            status_id: ObjectId("6741b3abfebecf90784bc246"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("674c1001ad080d212b4b1ae7"),
            order_id: ObjectId("674c0e46ad080d212b4b1acf"),
            status_id: ObjectId("6741b3abfebecf90784bc247"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("674c1ff2a50614d7a28b4594"),
            order_id: ObjectId("674c1fe8a50614d7a28b4583"),
            status_id: ObjectId("6741b3abfebecf90784bc244"),
            createdAt: new Date("2024-12-01T08:36:02.716Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("674c1ff2a50614d7a28b4595"),
            order_id: ObjectId("674c1fe8a50614d7a28b4583"),
            status_id: ObjectId("6741b3abfebecf90784bc245"),
            createdAt: new Date("2024-12-02T16:19:23.600Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("674c1ff2a50614d7a28b4596"),
            order_id: ObjectId("674c1fe8a50614d7a28b4583"),
            status_id: ObjectId("6741b3abfebecf90784bc246"),
            createdAt: new Date("2024-12-02T16:20:38.869Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("674c1ff2a50614d7a28b4597"),
            order_id: ObjectId("674c1fe8a50614d7a28b4583"),
            status_id: ObjectId("6741b3abfebecf90784bc247"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("674c20a8a50614d7a28b45d2"),
            order_id: ObjectId("674c2082a50614d7a28b45c1"),
            status_id: ObjectId("6741b3abfebecf90784bc244"),
            createdAt: new Date("2024-12-01T08:39:04.038Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("674c20a8a50614d7a28b45d3"),
            order_id: ObjectId("674c2082a50614d7a28b45c1"),
            status_id: ObjectId("6741b3abfebecf90784bc245"),
            createdAt: new Date("2024-12-02T16:14:10.452Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("674c20a8a50614d7a28b45d4"),
            order_id: ObjectId("674c2082a50614d7a28b45c1"),
            status_id: ObjectId("6741b3abfebecf90784bc246"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
    //
        {
            _id: ObjectId("674c20a8a50614d7a28b45d5"),
            order_id: ObjectId("674c2082a50614d7a28b45c1"),
            status_id: ObjectId("6741b3abfebecf90784bc247"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("674c544c1b90b0d7e35c72d5"),
            order_id: ObjectId("674c54411b90b0d7e35c72c6"),
            status_id: ObjectId("6741b3abfebecf90784bc244"),
            createdAt: new Date("2024-12-01T12:19:24.555Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("674c544c1b90b0d7e35c72d6"),
            order_id: ObjectId("674c54411b90b0d7e35c72c6"),
            status_id: ObjectId("6741b3abfebecf90784bc245"),
            createdAt: new Date("2024-12-02T16:01:23.301Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("674c544c1b90b0d7e35c72d7"),
            order_id: ObjectId("674c54411b90b0d7e35c72c6"),
            status_id: ObjectId("6741b3abfebecf90784bc246"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("674c544c1b90b0d7e35c72d8"),
            order_id: ObjectId("674c54411b90b0d7e35c72c6"),
            status_id: ObjectId("6741b3abfebecf90784bc247"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("674c635ce5063c9398680541"),
            order_id: ObjectId("674c635ce5063c9398680536"),
            status_id: ObjectId("6741b3abfebecf90784bc244"),
            createdAt: new Date("2024-12-01T13:23:40.731Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("674c635ce5063c9398680542"),
            order_id: ObjectId("674c635ce5063c9398680536"),
            status_id: ObjectId("6741b3abfebecf90784bc245"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("674c635ce5063c9398680543"),
            order_id: ObjectId("674c635ce5063c9398680536"),
            status_id: ObjectId("6741b3abfebecf90784bc246"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("674c635ce5063c9398680544"),
            order_id: ObjectId("674c635ce5063c9398680536"),
            status_id: ObjectId("6741b3abfebecf90784bc247"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("674c63ede5063c9398680559"),
            order_id: ObjectId("674c63ede5063c939868054e"),
            status_id: ObjectId("6741b3abfebecf90784bc244"),
            createdAt: new Date("2024-12-01T13:26:05.115Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("674c63ede5063c939868055a"),
            order_id: ObjectId("674c63ede5063c939868054e"),
            status_id: ObjectId("6741b3abfebecf90784bc245"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("674c63ede5063c939868055b"),
            order_id: ObjectId("674c63ede5063c939868054e"),
            status_id: ObjectId("6741b3abfebecf90784bc246"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("674c63ede5063c939868055c"),
            order_id: ObjectId("674c63ede5063c939868054e"),
            status_id: ObjectId("6741b3abfebecf90784bc247"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("674c64f8e5063c9398680593"),
            order_id: ObjectId("674c64f8e5063c9398680589"),
            status_id: ObjectId("6741b3abfebecf90784bc244"),
            createdAt: new Date("2024-12-01T13:30:32.432Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("674c64f8e5063c9398680594"),
            order_id: ObjectId("674c64f8e5063c9398680589"),
            status_id: ObjectId("6741b3abfebecf90784bc245"),
            createdAt: new Date("2024-12-02T15:51:41.158Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("674c64f8e5063c9398680595"),
            order_id: ObjectId("674c64f8e5063c9398680589"),
            status_id: ObjectId("6741b3abfebecf90784bc246"),
            createdAt: new Date("2024-12-03T13:37:21.211Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("674c64f8e5063c9398680596"),
            order_id: ObjectId("674c64f8e5063c9398680589"),
            status_id: ObjectId("6741b3abfebecf90784bc247"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("674c6f1b135a45393ac3827c"),
            order_id: ObjectId("674c6f1b135a45393ac38272"),
            status_id: ObjectId("6741b3abfebecf90784bc244"),
            createdAt: new Date("2024-12-01T14:13:47.748Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("674c6f1b135a45393ac3827d"),
            order_id: ObjectId("674c6f1b135a45393ac38272"),
            status_id: ObjectId("6741b3abfebecf90784bc245"),
            createdAt: new Date("2024-12-03T13:33:44.601Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("674c6f1b135a45393ac3827e"),
            order_id: ObjectId("674c6f1b135a45393ac38272"),
            status_id: ObjectId("6741b3abfebecf90784bc246"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
    //
        {
            _id: ObjectId("674c6f1b135a45393ac3827f"),
            order_id: ObjectId("674c6f1b135a45393ac38272"),
            status_id: ObjectId("6741b3abfebecf90784bc247"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("674efc6ae6ca0e50af3e4f55"),
            order_id: ObjectId("674efc3fe6ca0e50af3e4f46"),
            status_id: ObjectId("6741b3abfebecf90784bc244"),
            createdAt: new Date("2024-12-03T12:41:14.539Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("674efc6ae6ca0e50af3e4f56"),
            order_id: ObjectId("674efc3fe6ca0e50af3e4f46"),
            status_id: ObjectId("6741b3abfebecf90784bc245"),
            createdAt: new Date("2024-12-03T13:29:52.751Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("674efc6ae6ca0e50af3e4f57"),
            order_id: ObjectId("674efc3fe6ca0e50af3e4f46"),
            status_id: ObjectId("6741b3abfebecf90784bc246"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("674efc6ae6ca0e50af3e4f58"),
            order_id: ObjectId("674efc3fe6ca0e50af3e4f46"),
            status_id: ObjectId("6741b3abfebecf90784bc247"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("67569a5cadea324424515176"),
            order_id: ObjectId("6756975bf552000b2bae3e86"),
            status_id: ObjectId("6741b3abfebecf90784bc244"),
            createdAt: new Date("2024-12-09T07:21:00.512Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("67569a5cadea324424515177"),
            order_id: ObjectId("6756975bf552000b2bae3e86"),
            status_id: ObjectId("6741b3abfebecf90784bc245"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("67569a5cadea324424515178"),
            order_id: ObjectId("6756975bf552000b2bae3e86"),
            status_id: ObjectId("6741b3abfebecf90784bc246"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("67569a5cadea324424515179"),
            order_id: ObjectId("6756975bf552000b2bae3e86"),
            status_id: ObjectId("6741b3abfebecf90784bc247"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756a08fb4a7648736a80e47"),
            order_id: ObjectId("6756a03db4a7648736a80e37"),
            status_id: ObjectId("6741b3abfebecf90784bc244"),
            createdAt: new Date("2024-12-09T07:47:27.674Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("6756a08fb4a7648736a80e48"),
            order_id: ObjectId("6756a03db4a7648736a80e37"),
            status_id: ObjectId("6741b3abfebecf90784bc245"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756a08fb4a7648736a80e49"),
            order_id: ObjectId("6756a03db4a7648736a80e37"),
            status_id: ObjectId("6741b3abfebecf90784bc246"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756a08fb4a7648736a80e4a"),
            order_id: ObjectId("6756a03db4a7648736a80e37"),
            status_id: ObjectId("6741b3abfebecf90784bc247"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756a1f7b4a7648736a80eae"),
            order_id: ObjectId("6756a1dab4a7648736a80e9e"),
            status_id: ObjectId("6741b3abfebecf90784bc244"),
            createdAt: new Date("2024-12-09T07:53:27.987Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("6756a1f7b4a7648736a80eaf"),
            order_id: ObjectId("6756a1dab4a7648736a80e9e"),
            status_id: ObjectId("6741b3abfebecf90784bc245"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756a1f8b4a7648736a80eb0"),
            order_id: ObjectId("6756a1dab4a7648736a80e9e"),
            status_id: ObjectId("6741b3abfebecf90784bc246"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756a1f8b4a7648736a80eb1"),
            order_id: ObjectId("6756a1dab4a7648736a80e9e"),
            status_id: ObjectId("6741b3abfebecf90784bc247"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756a4f65b0ba3712239a566"),
            order_id: ObjectId("6756a4eb5b0ba3712239a556"),
            status_id: ObjectId("6741b3abfebecf90784bc244"),
            createdAt: new Date("2024-12-09T08:06:14.017Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("6756a4f65b0ba3712239a567"),
            order_id: ObjectId("6756a4eb5b0ba3712239a556"),
            status_id: ObjectId("6741b3abfebecf90784bc245"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756a4f65b0ba3712239a568"),
            order_id: ObjectId("6756a4eb5b0ba3712239a556"),
            status_id: ObjectId("6741b3abfebecf90784bc246"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756a4f65b0ba3712239a569"),
            order_id: ObjectId("6756a4eb5b0ba3712239a556"),
            status_id: ObjectId("6741b3abfebecf90784bc247"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
    //
        {
            _id: ObjectId("6756a7560dad16005ce8b2aa"),
            order_id: ObjectId("6756a7450dad16005ce8b29a"),
            status_id: ObjectId("6741b3abfebecf90784bc244"),
            createdAt: new Date("2024-12-09T08:16:22.449Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("6756a7560dad16005ce8b2ab"),
            order_id: ObjectId("6756a7450dad16005ce8b29a"),
            status_id: ObjectId("6741b3abfebecf90784bc245"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756a7560dad16005ce8b2ac"),
            order_id: ObjectId("6756a7450dad16005ce8b29a"),
            status_id: ObjectId("6741b3abfebecf90784bc246"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756a7560dad16005ce8b2ad"),
            order_id: ObjectId("6756a7450dad16005ce8b29a"),
            status_id: ObjectId("6741b3abfebecf90784bc247"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756abd10dad16005ce8b34e"),
            order_id: ObjectId("6756aac30dad16005ce8b33c"),
            status_id: ObjectId("6741b3abfebecf90784bc244"),
            createdAt: new Date("2024-12-09T08:35:29.504Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("6756abd10dad16005ce8b34f"),
            order_id: ObjectId("6756aac30dad16005ce8b33c"),
            status_id: ObjectId("6741b3abfebecf90784bc245"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756abd10dad16005ce8b350"),
            order_id: ObjectId("6756aac30dad16005ce8b33c"),
            status_id: ObjectId("6741b3abfebecf90784bc246"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756abd10dad16005ce8b351"),
            order_id: ObjectId("6756aac30dad16005ce8b33c"),
            status_id: ObjectId("6741b3abfebecf90784bc247"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756ac020dad16005ce8b390"),
            order_id: ObjectId("6756abf30dad16005ce8b380"),
            status_id: ObjectId("6741b3abfebecf90784bc244"),
            createdAt: new Date("2024-12-09T08:36:18.519Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("6756ac020dad16005ce8b391"),
            order_id: ObjectId("6756abf30dad16005ce8b380"),
            status_id: ObjectId("6741b3abfebecf90784bc245"),
            createdAt: new Date("2024-12-09T09:48:08.910Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("6756ac020dad16005ce8b392"),
            order_id: ObjectId("6756abf30dad16005ce8b380"),
            status_id: ObjectId("6741b3abfebecf90784bc246"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756ac020dad16005ce8b393"),
            order_id: ObjectId("6756abf30dad16005ce8b380"),
            status_id: ObjectId("6741b3abfebecf90784bc247"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756ac5b0dad16005ce8b3db"),
            order_id: ObjectId("6756ac520dad16005ce8b3cb"),
            status_id: ObjectId("6741b3abfebecf90784bc244"),
            createdAt: new Date("2024-12-09T08:37:47.677Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("6756ac5b0dad16005ce8b3dc"),
            order_id: ObjectId("6756ac520dad16005ce8b3cb"),
            status_id: ObjectId("6741b3abfebecf90784bc245"),
            createdAt: new Date("2024-12-09T09:51:22.959Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("6756ac5b0dad16005ce8b3dd"),
            order_id: ObjectId("6756ac520dad16005ce8b3cb"),
            status_id: ObjectId("6741b3abfebecf90784bc246"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756ac5b0dad16005ce8b3de"),
            order_id: ObjectId("6756ac520dad16005ce8b3cb"),
            status_id: ObjectId("6741b3abfebecf90784bc247"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756ad4b0dad16005ce8b43c"),
            order_id: ObjectId("6756ad430dad16005ce8b42a"),
            status_id: ObjectId("6741b3abfebecf90784bc244"),
            createdAt: new Date("2024-12-09T08:41:47.582Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("6756ad4b0dad16005ce8b43d"),
            order_id: ObjectId("6756ad430dad16005ce8b42a"),
            status_id: ObjectId("6741b3abfebecf90784bc245"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756ad4b0dad16005ce8b43e"),
            order_id: ObjectId("6756ad430dad16005ce8b42a"),
            status_id: ObjectId("6741b3abfebecf90784bc246"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756ad4b0dad16005ce8b43f"),
            order_id: ObjectId("6756ad430dad16005ce8b42a"),
            status_id: ObjectId("6741b3abfebecf90784bc247"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
    //
        {
            _id: ObjectId("6756b13f0dad16005ce8b47b"),
            order_id: ObjectId("6756b13f0dad16005ce8b471"),
            status_id: ObjectId("6741b3abfebecf90784bc244"),
            createdAt: new Date("2024-12-09T08:58:39.568Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("6756b13f0dad16005ce8b47c"),
            order_id: ObjectId("6756b13f0dad16005ce8b471"),
            status_id: ObjectId("6741b3abfebecf90784bc245"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756b13f0dad16005ce8b47d"),
            order_id: ObjectId("6756b13f0dad16005ce8b471"),
            status_id: ObjectId("6741b3abfebecf90784bc246"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756b13f0dad16005ce8b47e"),
            order_id: ObjectId("6756b13f0dad16005ce8b471"),
            status_id: ObjectId("6741b3abfebecf90784bc247"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756b3410dad16005ce8b51d"),
            order_id: ObjectId("6756b3330dad16005ce8b506"),
            status_id: ObjectId("6741b3abfebecf90784bc244"),
            createdAt: new Date("2024-12-09T09:07:13.857Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("6756b3410dad16005ce8b51e"),
            order_id: ObjectId("6756b3330dad16005ce8b506"),
            status_id: ObjectId("6741b3abfebecf90784bc245"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756b3410dad16005ce8b51f"),
            order_id: ObjectId("6756b3330dad16005ce8b506"),
            status_id: ObjectId("6741b3abfebecf90784bc246"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756b3410dad16005ce8b520"),
            order_id: ObjectId("6756b3330dad16005ce8b506"),
            status_id: ObjectId("6741b3abfebecf90784bc247"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756b3770dad16005ce8b563"),
            order_id: ObjectId("6756b36c0dad16005ce8b54f"),
            status_id: ObjectId("6741b3abfebecf90784bc244"),
            createdAt: new Date("2024-12-09T09:08:07.160Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("6756b3770dad16005ce8b564"),
            order_id: ObjectId("6756b36c0dad16005ce8b54f"),
            status_id: ObjectId("6741b3abfebecf90784bc245"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756b3770dad16005ce8b565"),
            order_id: ObjectId("6756b36c0dad16005ce8b54f"),
            status_id: ObjectId("6741b3abfebecf90784bc246"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756b3770dad16005ce8b566"),
            order_id: ObjectId("6756b36c0dad16005ce8b54f"),
            status_id: ObjectId("6741b3abfebecf90784bc247"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756b5140dad16005ce8b609"),
            order_id: ObjectId("6756b5000dad16005ce8b5f5"),
            status_id: ObjectId("6741b3abfebecf90784bc244"),
            createdAt: new Date("2024-12-09T09:15:00.275Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("6756b5140dad16005ce8b60a"),
            order_id: ObjectId("6756b5000dad16005ce8b5f5"),
            status_id: ObjectId("6741b3abfebecf90784bc245"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756b5140dad16005ce8b60b"),
            order_id: ObjectId("6756b5000dad16005ce8b5f5"),
            status_id: ObjectId("6741b3abfebecf90784bc246"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756b5140dad16005ce8b60c"),
            order_id: ObjectId("6756b5000dad16005ce8b5f5"),
            status_id: ObjectId("6741b3abfebecf90784bc247"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756b57f0dad16005ce8b64d"),
            order_id: ObjectId("6756b5770dad16005ce8b63d"),
            status_id: ObjectId("6741b3abfebecf90784bc244"),
            createdAt: new Date("2024-12-09T09:16:47.701Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("6756b57f0dad16005ce8b64e"),
            order_id: ObjectId("6756b5770dad16005ce8b63d"),
            status_id: ObjectId("6741b3abfebecf90784bc245"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756b57f0dad16005ce8b64f"),
            order_id: ObjectId("6756b5770dad16005ce8b63d"),
            status_id: ObjectId("6741b3abfebecf90784bc246"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756b57f0dad16005ce8b650"),
            order_id: ObjectId("6756b5770dad16005ce8b63d"),
            status_id: ObjectId("6741b3abfebecf90784bc247"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756b9fb0dad16005ce8b68d"),
            order_id: ObjectId("6756b9ed0dad16005ce8b679"),
            status_id: ObjectId("6741b3abfebecf90784bc244"),
            createdAt: new Date("2024-12-09T09:35:55.859Z"),
            is_check: true,
            __v: 0
        },
    //
        {
            _id: ObjectId("6756b9fb0dad16005ce8b68e"),
            order_id: ObjectId("6756b9ed0dad16005ce8b679"),
            status_id: ObjectId("6741b3abfebecf90784bc245"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756b9fb0dad16005ce8b68f"),
            order_id: ObjectId("6756b9ed0dad16005ce8b679"),
            status_id: ObjectId("6741b3abfebecf90784bc246"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756b9fb0dad16005ce8b690"),
            order_id: ObjectId("6756b9ed0dad16005ce8b679"),
            status_id: ObjectId("6741b3abfebecf90784bc247"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756bf6a204903ae7dc1cfd8"),
            order_id: ObjectId("6756bf00204903ae7dc1cfc8"),
            status_id: ObjectId("6741b3abfebecf90784bc244"),
            createdAt: new Date("2024-12-09T09:59:06.079Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("6756bf6a204903ae7dc1cfd9"),
            order_id: ObjectId("6756bf00204903ae7dc1cfc8"),
            status_id: ObjectId("6741b3abfebecf90784bc245"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756bf6a204903ae7dc1cfda"),
            order_id: ObjectId("6756bf00204903ae7dc1cfc8"),
            status_id: ObjectId("6741b3abfebecf90784bc246"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756bf6a204903ae7dc1cfdb"),
            order_id: ObjectId("6756bf00204903ae7dc1cfc8"),
            status_id: ObjectId("6741b3abfebecf90784bc247"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756bf9b204903ae7dc1d01b"),
            order_id: ObjectId("6756bf95204903ae7dc1d00b"),
            status_id: ObjectId("6741b3abfebecf90784bc244"),
            createdAt: new Date("2024-12-09T09:59:55.074Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("6756bf9b204903ae7dc1d01c"),
            order_id: ObjectId("6756bf95204903ae7dc1d00b"),
            status_id: ObjectId("6741b3abfebecf90784bc245"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756bf9b204903ae7dc1d01d"),
            order_id: ObjectId("6756bf95204903ae7dc1d00b"),
            status_id: ObjectId("6741b3abfebecf90784bc246"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756bf9b204903ae7dc1d01e"),
            order_id: ObjectId("6756bf95204903ae7dc1d00b"),
            status_id: ObjectId("6741b3abfebecf90784bc247"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756c00a204903ae7dc1d061"),
            order_id: ObjectId("6756c001204903ae7dc1d04f"),
            status_id: ObjectId("6741b3abfebecf90784bc244"),
            createdAt: new Date("2024-12-09T10:01:46.430Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("6756c00a204903ae7dc1d062"),
            order_id: ObjectId("6756c001204903ae7dc1d04f"),
            status_id: ObjectId("6741b3abfebecf90784bc245"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756c00a204903ae7dc1d063"),
            order_id: ObjectId("6756c001204903ae7dc1d04f"),
            status_id: ObjectId("6741b3abfebecf90784bc246"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756c00a204903ae7dc1d064"),
            order_id: ObjectId("6756c001204903ae7dc1d04f"),
            status_id: ObjectId("6741b3abfebecf90784bc247"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
    ]
)

// payment
db.createCollection('payment');
db.payment.insertMany(
    [
        {
            _id: ObjectId("674b29b43521e6fef9223b31"),
            payment_method_id: ObjectId("6741b3bafebecf90784bc24b"),
            order_id: ObjectId("674b29753521e6fef9223b1c"),
            total_money: 611.6,
            __v: 0,
        },
        {
            _id: ObjectId("674c0e1fad080d212b4b1aae"),
            payment_method_id: ObjectId("6741b3bafebecf90784bc24a"),
            order_id: ObjectId("674c0c5aad080d212b4b1a95"),
            total_money: 611.6,
            __v: 0,
        },
        {
            _id: ObjectId("674c1001ad080d212b4b1aea"),
            payment_method_id: ObjectId("6741b3bafebecf90784bc24a"),
            order_id: ObjectId("674c0e46ad080d212b4b1acf"),
            total_money: 963.6,
            __v: 0,
        },
        {
            _id: ObjectId("674c1ff2a50614d7a28b459a"),
            payment_method_id: ObjectId("6741b3bafebecf90784bc24a"),
            order_id: ObjectId("674c1fe8a50614d7a28b4583"),
            total_money: 765.6,
            __v: 0,
        },
        {
            _id: ObjectId("674c20a8a50614d7a28b45d8"),
            payment_method_id: ObjectId("6741b3bafebecf90784bc24b"),
            order_id: ObjectId("674c2082a50614d7a28b45c1"),
            total_money: 473,
            __v: 0,
        },
        {
            _id: ObjectId("674c544c1b90b0d7e35c72db"),
            payment_method_id: ObjectId("6741b3bafebecf90784bc24a"),
            order_id: ObjectId("674c54411b90b0d7e35c72c6"),
            total_money: 138.6,
            __v: 0,
        },
        {
            _id: ObjectId("674c635ce5063c9398680547"),
            payment_method_id: ObjectId("6741b3bafebecf90784bc24a"),
            order_id: ObjectId("674c635ce5063c9398680536"),
            total_money: 963.6,
            __v: 0,
        },
        {
            _id: ObjectId("674c63ede5063c939868055f"),
            payment_method_id: ObjectId("6741b3bafebecf90784bc24a"),
            order_id: ObjectId("674c63ede5063c939868054e"),
            total_money: 963.6,
            __v: 0,
        },
        {
            _id: ObjectId("674c64f8e5063c9398680599"),
            payment_method_id: ObjectId("6741b3bafebecf90784bc24a"),
            order_id: ObjectId("674c64f8e5063c9398680589"),
            total_money: 288.2,
            __v: 0,
        },
        {
            _id: ObjectId("674c6f1b135a45393ac38282"),
            payment_method_id: ObjectId("6741b3bafebecf90784bc24b"),
            order_id: ObjectId("674c6f1b135a45393ac38272"),
            total_money: 616,
            __v: 0,
        },
        {
            _id: ObjectId("674efc6ae6ca0e50af3e4f5b"),
            payment_method_id: ObjectId("6741b3bafebecf90784bc24a"),
            order_id: ObjectId("674efc3fe6ca0e50af3e4f46"),
            total_money: 616,
            __v: 0,
        },
        {
            _id: ObjectId("67569a5cadea32442451517c"),
            payment_method_id: ObjectId("6741b3bafebecf90784bc24b"),
            order_id: ObjectId("6756975bf552000b2bae3e86"),
            total_money: 226.6,
            __v: 0,
        },
        {
            _id: ObjectId("6756a08fb4a7648736a80e4d"),
            payment_method_id: ObjectId("6741b3bafebecf90784bc24b"),
            order_id: ObjectId("6756a03db4a7648736a80e37"),
            total_money: 693,
            __v: 0,
        },
        {
            _id: ObjectId("6756a1f8b4a7648736a80eb4"),
            payment_method_id: ObjectId("6741b3bafebecf90784bc24b"),
            order_id: ObjectId("6756a1dab4a7648736a80e9e"),
            total_money: 38.5,
            __v: 0,
        },
        {
            _id: ObjectId("6756a4f65b0ba3712239a56c"),
            payment_method_id: ObjectId("6741b3bafebecf90784bc24a"),
            order_id: ObjectId("6756a4eb5b0ba3712239a556"),
            total_money: 561,
            __v: 0,
        },
        {
            _id: ObjectId("6756a7560dad16005ce8b2b0"),
            payment_method_id: ObjectId("6741b3bafebecf90784bc24a"),
            order_id: ObjectId("6756a7450dad16005ce8b29a"),
            total_money: 629.2,
            __v: 0,
        },
        {
            _id: ObjectId("6756abd10dad16005ce8b354"),
            payment_method_id: ObjectId("6741b3bafebecf90784bc24a"),
            order_id: ObjectId("6756aac30dad16005ce8b33c"),
            total_money: 724.9,
            __v: 0,
        },
        {
            _id: ObjectId("6756ac020dad16005ce8b396"),
            payment_method_id: ObjectId("6741b3bafebecf90784bc24a"),
            order_id: ObjectId("6756abf30dad16005ce8b380"),
            total_money: 431.2,
            __v: 0,
        },
        {
            _id: ObjectId("6756ac5b0dad16005ce8b3e1"),
            payment_method_id: ObjectId("6741b3bafebecf90784bc24a"),
            order_id: ObjectId("6756ac520dad16005ce8b3cb"),
            total_money: 149.6,
            __v: 0,
        },
        {
            _id: ObjectId("6756ad4b0dad16005ce8b442"),
            payment_method_id: ObjectId("6741b3bafebecf90784bc24a"),
            order_id: ObjectId("6756ad430dad16005ce8b42a"),
            total_money: 1078,
            __v: 0,
        },
        {
            _id: ObjectId("6756b13f0dad16005ce8b481"),
            payment_method_id: ObjectId("6741b3bafebecf90784bc24a"),
            order_id: ObjectId("6756b13f0dad16005ce8b471"),
            total_money: 204.6,
            __v: 0,
        },
        {
            _id: ObjectId("6756b3410dad16005ce8b523"),
            payment_method_id: ObjectId("6741b3bafebecf90784bc24a"),
            order_id: ObjectId("6756b3330dad16005ce8b506"),
            total_money: 223.3,
            __v: 0,
        },
        {
            _id: ObjectId("6756b3770dad16005ce8b569"),
            payment_method_id: ObjectId("6741b3bafebecf90784bc24a"),
            order_id: ObjectId("6756b36c0dad16005ce8b54f"),
            total_money: 189.09,
            __v: 0,
        },
        {
            _id: ObjectId("6756b5140dad16005ce8b60f"),
            payment_method_id: ObjectId("6741b3bafebecf90784bc24a"),
            order_id: ObjectId("6756b5000dad16005ce8b5f5"),
            total_money: 39.27,
            __v: 0,
        },
        {
            _id: ObjectId("6756b57f0dad16005ce8b653"),
            payment_method_id: ObjectId("6741b3bafebecf90784bc24a"),
            order_id: ObjectId("6756b5770dad16005ce8b63d"),
            total_money: 2129.6,
            __v: 0,
        },
        {
            _id: ObjectId("6756b9fb0dad16005ce8b693"),
            payment_method_id: ObjectId("6741b3bafebecf90784bc24a"),
            order_id: ObjectId("6756b9ed0dad16005ce8b679"),
            total_money: 722.7,
            __v: 0,
        },
        {
            _id: ObjectId("6756bf6a204903ae7dc1cfde"),
            payment_method_id: ObjectId("6741b3bafebecf90784bc24a"),
            order_id: ObjectId("6756bf00204903ae7dc1cfc8"),
            total_money: 508.2,
            __v: 0,
        },
        {
            _id: ObjectId("6756bf9b204903ae7dc1d021"),
            payment_method_id: ObjectId("6741b3bafebecf90784bc24a"),
            order_id: ObjectId("6756bf95204903ae7dc1d00b"),
            total_money: 149.6,
            __v: 0,
        },
        {
            _id: ObjectId("6756c00a204903ae7dc1d067"),
            payment_method_id: ObjectId("6741b3bafebecf90784bc24a"),
            order_id: ObjectId("6756c001204903ae7dc1d04f"),
            total_money: 149.6,
            __v: 0,
        }
    ]
)

// payment method
db.createCollection('payment_method');
db.payment_method.insertMany(
    [
        {
            _id: ObjectId("6741b3bafebecf90784bc24a"),
            payment_method_name: "Cash"
        },
        {
            _id: ObjectId("6741b3bafebecf90784bc24b"),
            payment_method_name: "PayPal"
        },
        {
            _id: ObjectId("6741b3bafebecf90784bc24c"),
            payment_method_name: "VNPAY"
        },
        {
            _id: ObjectId("6741b3bafebecf90784bc24d"),
            payment_method_name: "ZaloPay"
        }
    ]
)

// product
db.createCollection('product');
db.product.insertMany(
    [
        // PC
        {
            _id: ObjectId("674138636c0973f433b151a5"),
            category_id: ObjectId("673cb3eb652666000535468b"),
            product_name: "PC ST Mercury R7",
            product_description: "High-performance gaming PC with RGB lighting and liquid cooling. Choose between AMD Ryzen 7 (R7) or Intel Core i7 processors. Features 32GB DDR4 RAM, 1TB SSD, and RTX 4060Ti 8GB for smooth gaming and multitasking.",
            product_price: 1250, // ~29,990,000 VND → 1250 USD
            product_img: "https://res.cloudinary.com/doikoud7x/image/upload/v1747399443/NodeJS_FinalProject/products/arffjyuzhueys4w1stlb.jpg", 
            createdAt: new Date("2024-11-22T00:00:00Z"),
            updatedAt: new Date("2024-11-22T00:00:00Z"),
            deleted: false
        },
        {
            _id: ObjectId("674138636c0973f433b151a6"),
            category_id: ObjectId("673cb3eb652666000535468b"),
            product_name: "PC Gaming Star ASUS ROG White Intel i5 14400F RTX 4060",
            product_description: "Powerful gaming PC with Intel Core i5-14400F processor, NVIDIA RTX 4060 graphics, 32GB RAM, and 500GB SSD. Features ASUS ROG B760 WiFi motherboard in a sleek white design for superior gaming performance.",
            product_price: 1000,
            product_img: "https://res.cloudinary.com/doikoud7x/image/upload/v1747397905/NodeJS_FinalProject/products/fr6hjokirbjankatygoe.png",
            createdAt: new Date("2024-11-22T00:00:00Z"),
            updatedAt: new Date("2024-11-22T00:00:00Z"),
            deleted: false
        },
        {
            _id: ObjectId("674138636c0973f433b151a7"),
            category_id: ObjectId("673cb3eb652666000535468b"),
            product_name: "PC Gaming Star MSI Yasuo",
            product_description: "PC Gaming Star MSI Yasuo features Intel Core i5-12400F, RTX 3060 12GB, motherboard B760M, 16GB RAM, and 500GB SSD. A powerful gaming PC with excellent performance for modern games.",
            product_price: 1200,
            product_img: "https://res.cloudinary.com/doikoud7x/image/upload/v1747394491/NodeJS_FinalProject/products/pc.jpg",
            createdAt: new Date("2024-11-22T00:00:00Z"),
            updatedAt: new Date("2024-11-22T00:00:00Z"),
            deleted: false
        },
        {
            _id: ObjectId("674138636c0973f433b151a8"),
            category_id: ObjectId("673cb3eb652666000535468b"),
            product_name: "PC Gaming Star Yone R7 7800X3D RTX 4060Ti",
            product_description: "Powerful gaming PC with AMD Ryzen 7 7800X3D processor, NVIDIA RTX 4060Ti 16GB graphics, 16GB RAM, and 500GB SSD. Built on B650M motherboard for excellent performance in gaming and content creation.",
            product_price: 1500,
            product_img: "https://res.cloudinary.com/doikoud7x/image/upload/v1747399763/NodeJS_FinalProject/products/nsqpe8xwas1cnbwhfnox.png",
            createdAt: new Date("2024-11-22T00:00:00Z"),
            updatedAt: new Date("2024-11-22T00:00:00Z"),
            deleted: false
        },
        {
            _id: ObjectId("674138636c0973f433b151a9"),
            category_id: ObjectId("673cb3eb652666000535468b"),
            product_name: "PC Gaming R5 Mini",
            product_description: "The PC Gaming R5 Mini features an AMD Ryzen 5 5600 processor, NVIDIA GeForce RTX 3060 Ti graphics, 16GB DDR4 RAM, and 512GB SSD storage. With a compact design and powerful performance, it's perfect for gaming and multitasking.",
            product_price: 1200,
            product_img: "https://res.cloudinary.com/doikoud7x/image/upload/v1747399858/NodeJS_FinalProject/products/wre2v7qv9ohx2xhiwpwg.jpg",
            createdAt: new Date("2024-11-22T00:00:00Z"),
            updatedAt: new Date("2024-11-22T00:00:00Z"),
            deleted: false
        },
        //Keyboard
        {
            _id: ObjectId("674138636c0973f433b151aa"),
            category_id: ObjectId("674e9fb2b5963e58692581d6"),
            product_name: "Wireless Mechanical Keyboard E-DRA EK368L",
            product_description: "The E-DRA EK368L wireless mechanical keyboard features a modern design, durable mechanical switches, stable wireless connection, and multi-color RGB backlighting. Suitable for both work and gaming.",
            product_price: 50,
            product_img: "https://res.cloudinary.com/doikoud7x/image/upload/v1747414804/NodeJS_FinalProject/products/sg4yp9i16mprer1aypj5.png",
            createdAt: new Date("2024-11-22T00:00:00Z"),
            updatedAt: new Date("2024-11-22T00:00:00Z"),
            deleted: false
        },
        {
            _id: ObjectId("674138636c0973f433b151ab"),
            category_id: ObjectId("674e9fb2b5963e58692581d6"),
            product_name: "AULA S2022 Mechanical Keyboard",
            product_description: "AULA S2022 mechanical keyboard with RGB LED backlighting, durable mechanical switches, and 104-key full layout. Features anti-ghosting technology, 50 million keystroke durability, suitable for both gamers and office use.",
            product_price: 33.62,
            product_img: "https://res.cloudinary.com/doikoud7x/image/upload/v1747415331/NodeJS_FinalProject/products/jmztryht9gjgdzdkbzzh.png",
            createdAt: new Date("2024-11-22T00:00:00Z"),
            updatedAt: new Date("2024-11-22T00:00:00Z"),
            deleted: false
        },
        {
            _id: ObjectId("674138636c0973f433b151ac"),
            category_id: ObjectId("674e9fb2b5963e58692581d6"),
            product_name: "AULA AC306 Wireless Keyboard and Mouse Combo",
            product_description: "The AULA AC306 wireless keyboard and mouse combo features a modern design with stable 2.4GHz USB connection, suitable for both work and entertainment. The keyboard has a 104-key layout with 7-color LED backlighting, and the mouse offers 1600DPI resolution.",
            product_price: 33,
            product_img: "https://res.cloudinary.com/doikoud7x/image/upload/v1747416745/NodeJS_FinalProject/products/x33qyth2avztix1l9nxn.webp",
            createdAt: new Date("2024-11-22T00:00:00Z"),
            updatedAt: new Date("2024-11-22T00:00:00Z"),
            deleted: false
        },
        {
            _id: ObjectId("674138636c0973f433b151ad"),
            category_id: ObjectId("674e9fb2b5963e58692581d6"),
            product_name: "AULA F75 Reaper Wireless Mechanical Keyboard",
            product_description: "The AULA F75 Reaper features a 75% compact layout with hot-swappable switches, RGB backlighting, and dual-mode wireless connectivity. Its ergonomic design and durable construction make it ideal for gaming and typing.",
            product_price: 89,
            product_img: "https://res.cloudinary.com/doikoud7x/image/upload/v1747417579/NodeJS_FinalProject/products/hicsk107lgtvrbjxagut.webp",
            createdAt: new Date("2024-11-22T00:00:00Z"),
            updatedAt: new Date("2024-11-22T00:00:00Z"),
            deleted: false
        },

    //Laptop
        {
            _id: ObjectId("674138636c0973f433b151c3"),
            category_id: ObjectId("673cb3eb652666000535468c"),
            product_name: "DELL Latitude 5490 Core i5 7th Gen Laptop",
            product_description: "The DELL Latitude 5490 features a 14-inch FHD display, powered by an Intel Core i5 7th Gen processor, 8GB RAM, and a 512GB SSD. It offers excellent performance for business and personal use, along with a durable design, long battery life, and robust security features. Ideal for professionals who need reliability and speed for multitasking.",
            product_price: 310,
            product_img: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732547455/NodeJS_FinalProject/products/phones/q0b7prsft9vihgx9fkdw.jpg",
            createdAt: new Date("2024-11-22T00:00:00Z"),
            updatedAt: new Date("2024-11-22T00:00:00Z"),
            deleted: false
        },
        {
            _id: ObjectId("674138636c0973f433b151c4"),
            category_id: ObjectId("673cb3eb652666000535468c"),
            product_name: "HP Chromebook C640 10th Gen Intel Core i5 Thin & Light FHD Laptop",
            product_description: "The HP Chromebook C640 features a 14-inch FHD anti-glare display, powered by a 10th Gen Intel Core i5 processor, 8GB RAM, and a 128GB SSD. With its lightweight design, long battery life, and Chrome OS, it’s an excellent choice for students and professionals who need fast, secure, and efficient computing for everyday tasks, browsing, and productivity.",
            product_price: 610,
            product_img: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732547538/NodeJS_FinalProject/products/phones/ndji8gipx3gfj1jsfd3p.jpg",
            createdAt: new Date("2024-11-22T00:00:00Z"),
            updatedAt: new Date("2024-11-22T00:00:00Z"),
            deleted: false
        },
        {
            _id: ObjectId("674138636c0973f433b151c5"),
            category_id: ObjectId("673cb3eb652666000535468c"),
            product_name: "Lenovo ThinkPad X260 High Performance 12.5 inch IPS Panel 1.5kg Laptop",
            product_description: "The Lenovo ThinkPad X260 is a high-performance 12.5-inch laptop featuring an IPS panel display. Powered by Intel Core i5 processors, 8GB RAM, and a 256GB SSD, it delivers excellent speed and reliability. Weighing just 1.5kg, it’s perfect for professionals who need a portable, durable, and powerful laptop for work, travel, and everyday tasks. The long battery life ensures all-day productivity.",
            product_price: 562,
            product_img: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732547611/NodeJS_FinalProject/products/phones/npnhzszjcszlohshkotd.jpg",
            createdAt: new Date("2024-11-22T00:00:00Z"),
            updatedAt: new Date("2024-11-22T00:00:00Z"),
            deleted: false
        },
        {
            _id: ObjectId("674138636c0973f433b151c6"),
            category_id: ObjectId("673cb3eb652666000535468c"),
            product_name: "Lenovo ThinkPad T450 Intel Core i5-5300U 14 inches Business Laptop Computer",
            product_description: "The Lenovo ThinkPad T450 is a reliable 14-inch business laptop featuring an Intel Core i5-5300U processor, 8GB RAM, and a 256GB SSD. With its durable design and full-size keyboard, it’s built for professionals who need a portable device with robust performance. Ideal for multitasking and productivity, the ThinkPad T450 ensures smooth computing for work-related tasks and everyday use.",
            product_price: 193,
            product_img: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732547703/NodeJS_FinalProject/products/phones/bkow5o9cw7wrnuoastfs.jpg",
            createdAt: new Date("2024-11-22T00:00:00Z"),
            updatedAt: new Date("2024-11-22T00:00:00Z"),
            deleted: false
        },
        {
            _id: ObjectId("674138636c0973f433b151c7"),
            category_id: ObjectId("673cb3eb652666000535468c"),
            product_name: "HP Victus Gaming Latest FHD Gaming Laptop",
            product_description: "The HP Victus Gaming Laptop is equipped with the latest Intel Core i7 processor, NVIDIA GeForce GTX 1660 Ti graphics, 16GB RAM, and a 512GB SSD. With its 15.6-inch FHD display, it offers an immersive gaming experience with vibrant visuals and smooth gameplay. Designed for gamers, it ensures high performance and fast processing for even the most demanding games, along with a sleek and durable design for everyday use.",
            product_price: 750,
            product_img: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732547808/NodeJS_FinalProject/products/phones/xzdij9cija2oycweree7.jpg",
            createdAt: new Date("2024-11-22T00:00:00Z"),
            updatedAt: new Date("2024-11-22T00:00:00Z"),
            deleted: false
        },
        {
            _id: ObjectId("674138636c0973f433b151c8"),
            category_id: ObjectId("673cb3eb652666000535468c"),
            product_name: "Acer Aspire 5 Gaming Laptop Intel Core i5 12th gen",
            product_description: "The Acer Aspire 5 Gaming Laptop is powered by the latest Intel Core i5 12th generation processor, offering smooth multitasking and performance for gaming and productivity tasks. It features a 15.6-inch Full HD display, 8GB RAM, and a 512GB SSD, making it ideal for gaming enthusiasts and professionals. With its slim design, long-lasting battery life, and fast performance, the Aspire 5 is a perfect choice for both work and play.",
            product_price: 649,
            product_img: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732548020/NodeJS_FinalProject/products/phones/lg5qi5ymyiywplyfulw2.jpg",
            createdAt: new Date("2024-11-22T00:00:00Z"),
            updatedAt: new Date("2024-11-22T00:00:00Z"),
            deleted: false
        },
        {
            _id: ObjectId("674138636c0973f433b151c9"),
            category_id: ObjectId("673cb3eb652666000535468c"),
            product_name: "HP Pavilion 14 FHD Gaming Laptop",
            product_description: "The HP Pavilion FHD Gaming Laptop is designed for high-performance gaming and multitasking. It is powered by an Intel Core i7 processor, 16GB RAM, and a 512GB SSD. The 15.6-inch Full HD display offers crisp visuals, while the NVIDIA GeForce GTX graphics ensure smooth gameplay. Ideal for gamers looking for powerful performance and a sleek design, the HP Pavilion is a perfect blend of speed, reliability, and style.",
            product_price: 590,
            product_img: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732548219/NodeJS_FinalProject/products/phones/s3ugiqjifsfold2jwbzl.jpg",
            createdAt: new Date("2024-11-22T00:00:00Z"),
            updatedAt: new Date("2024-11-22T00:00:00Z"),
            deleted: false
        },
        {
            _id: ObjectId("674138636c0973f433b151ca"),
            category_id: ObjectId("673cb3eb652666000535468c"),
            product_name: "ASUS TUF Gaming A15 Laptop",
            product_description: "The ASUS TUF Gaming A15 is built for performance with a powerful AMD Ryzen 7 5800H processor, NVIDIA GeForce RTX 3060 graphics, and a 15.6-inch Full HD display. Equipped with 16GB RAM and a 512GB SSD, it ensures fast load times and smooth gameplay. The durable design, enhanced cooling system, and military-grade build make it perfect for gamers who need a reliable machine for long sessions and heavy tasks.",
            product_price: 688,
            product_img: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732548326/NodeJS_FinalProject/products/phones/loaaw8hobifhihubgiwq.jpg",
            createdAt: new Date("2024-11-22T00:00:00Z"),
            updatedAt: new Date("2024-11-22T00:00:00Z"),
            deleted: false
        },
        {
            _id: ObjectId("674138636c0973f433b151cb"),
            category_id: ObjectId("673cb3eb652666000535468c"),
            product_name: "Lenovo Ideapad Gaming 3",
            product_description: "The Lenovo Ideapad Gaming 3 is a powerful gaming laptop designed to handle intensive tasks with ease. Powered by the AMD Ryzen 5 5600H processor and NVIDIA GeForce GTX 1650 graphics, it offers smooth gameplay and multitasking performance. Featuring a 15.6-inch Full HD display with a 120Hz refresh rate, 8GB RAM, and a 512GB SSD, this laptop delivers an immersive gaming experience and fast load times, all within a durable and sleek design.",
            product_price: 876,
            product_img: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732548414/NodeJS_FinalProject/products/phones/righyjleqb7fvtfvlb6l.jpg",
            createdAt: new Date("2024-11-22T00:00:00Z"),
            updatedAt: new Date("2024-11-22T00:00:00Z"),
            deleted: false
        },

        //1
        {
            _id: ObjectId("674138636c0973f433b151ae"),
            category_id: ObjectId("673cb3eb652666000535468c"),
            product_name: "MSI Katana 15 Gaming Laptop",
            product_description: "15.6\" FHD 144Hz display with Intel Core i7-13620H and NVIDIA RTX 4060 GPU. 16GB DDR5 RAM and 1TB SSD provide excellent gaming performance.",
            product_price: 1299,
            product_img: "https://res.cloudinary.com/doikoud7x/image/upload/v1747420071/NodeJS_FinalProject/products/d9xnapzexz2uxy9mwznr.jpg",
            createdAt: new Date("2024-11-22T00:00:00Z"),
            updatedAt: new Date("2024-11-22T00:00:00Z"),
            deleted: false
        },
        //2
        {
            _id: ObjectId("674138636c0973f433b151af"),
            category_id: ObjectId("673cb3eb652666000535468c"),
            product_name: "Dell XPS 15 Professional Laptop",
            product_description: "15.6\" 4K UHD+ touch display with Intel Core i9-13900H and Intel Arc A370M GPU. 32GB DDR5 RAM and 1TB SSD for premium productivity.",
            product_price: 2199,
            product_img: "https://res.cloudinary.com/doikoud7x/image/upload/v1747420194/NodeJS_FinalProject/products/issjmzmyqkyqajctk37q.webp",
            createdAt: new Date("2024-11-22T00:00:00Z"),
            updatedAt: new Date("2024-11-22T00:00:00Z"),
            deleted: false
        },
        //3
        {
            _id: ObjectId("674138636c0973f433b151b0"),
            category_id: ObjectId("673cb3eb652666000535468c"),
            product_name: "Apple MacBook Air M2",
            product_description: "13.6\" Liquid Retina display with Apple M2 chip. 8-core CPU, 10-core GPU, 8GB unified memory and 256GB SSD. Ultra-thin and lightweight design.",
            product_price: 999,
            product_img: "https://res.cloudinary.com/doikoud7x/image/upload/v1747420300/NodeJS_FinalProject/products/tugdcx0jk2kbpxqhsaof.jpg",
            createdAt: new Date("2024-11-22T00:00:00Z"),
            updatedAt: new Date("2024-11-22T00:00:00Z"),
            deleted: false
        },
        //4
        {
            _id: ObjectId("674138636c0973f433b151b1"),
            category_id: ObjectId("673cb3eb652666000535468c"),
            product_name: "ASUS ROG Zephyrus G14",
            product_description: "14\" QHD 165Hz gaming laptop with AMD Ryzen 9 7940HS and NVIDIA RTX 4060. 16GB DDR5 RAM and 1TB SSD in a compact form factor.",
            product_price: 2009,
            product_img: "https://res.cloudinary.com/doikoud7x/image/upload/v1747421277/NodeJS_FinalProject/products/srpuih2hjynahwvfvma7.webp",
            createdAt: new Date("2024-11-22T00:00:00Z"),
            updatedAt: new Date("2024-11-22T00:00:00Z"),
            deleted: false
        },

        //5
        {
            _id: ObjectId("674138636c0973f433b151b2"),
            category_id: ObjectId("673cb3eb652666000535468c"),
            product_name: "Microsoft Surface Laptop 5",
            product_description: "13.5\" PixelSense touch display with Intel Core i7-1255U, 16GB RAM and 512GB SSD. Premium aluminum build with Windows 11 Pro.",
            product_price: 1299,
            product_img: "https://res.cloudinary.com/doikoud7x/image/upload/v1747421672/NodeJS_FinalProject/products/uktekfpjqk1w6xevnbys.webp",
            createdAt: new Date("2024-11-22T00:00:00Z"),
            updatedAt: new Date("2024-11-22T00:00:00Z"),
            deleted: false
        },
        {
            _id: ObjectId("674138636c0973f433b151b3"),
            category_id: ObjectId("673cb3eb652666000535468c"),
            product_name: "Acer Swift X Creator Laptop",
            product_description: "14\" FHD IPS display with AMD Ryzen 7 5825U and NVIDIA RTX 3050 Ti. 16GB RAM and 512GB SSD for content creation on the go.",
            product_price: 1099,
            product_img: "https://res.cloudinary.com/doikoud7x/image/upload/v1747422149/NodeJS_FinalProject/products/omkftjoi07hf1rvcx0ng.webp",
            createdAt: new Date("2024-11-22T00:00:00Z"),
            updatedAt: new Date("2024-11-22T00:00:00Z"),
            deleted: false
        },
        {
            _id: ObjectId("674138636c0973f433b151b4"),
            category_id: ObjectId("673cb3eb652666000535468c"),
            product_name: "Razer Blade 15 Gaming Laptop",
            product_description: "15.6\" QHD 240Hz display with Intel Core i7-12800H and NVIDIA RTX 3070 Ti. 16GB DDR5 RAM and 1TB SSD in a premium CNC aluminum chassis.",
            product_price: 2499,
            product_img: "https://res.cloudinary.com/doikoud7x/image/upload/v1747422630/NodeJS_FinalProject/products/ufoqw7syhqiwsyusi9g8.jpg",
            createdAt: new Date("2024-11-22T00:00:00Z"),
            updatedAt: new Date("2024-11-22T00:00:00Z"),
            deleted: false
        },
        {
            _id: ObjectId("674138636c0973f433b151b5"),
            category_id: ObjectId("673cb3eb652666000535468c"),
            product_name: "LG Gram 17 Ultra-Light Laptop",
            product_description: "17\" WQXGA IPS display with Intel Core i7-1260P, 16GB RAM and 1TB SSD. Weighs just 1.35kg with military-grade durability.",
            product_price: 1699,
            product_img: "https://res.cloudinary.com/doikoud7x/image/upload/v1747422892/NodeJS_FinalProject/products/ogza7tshuqcvfjocssqf.jpg",
            createdAt: new Date("2024-11-22T00:00:00Z"),
            updatedAt: new Date("2024-11-22T00:00:00Z"),
            deleted: false
        },
        
        // Screen
        {
            _id: ObjectId("674138636c0973f433b151cd"),
            category_id: ObjectId("673cb3eb652666000535468d"),
            product_name: "MSI MP251 E2 25-inch 120Hz",
            product_description: "The MSI MP251 E2 features a 25-inch Full HD display with 120Hz refresh rate, 1ms response time, and AMD FreeSync technology. With IPS panel, it delivers wide viewing angles and accurate colors, making it ideal for gaming and multimedia.",
            product_price: 199,
            product_img: "https://res.cloudinary.com/doikoud7x/image/upload/v1747408499/NodeJS_FinalProject/products/thmbe10mqonsm5zptwyp.webp",
            createdAt: new Date("2024-11-22T00:00:00Z"),
            updatedAt: new Date("2024-11-22T00:00:00Z"),
            deleted: false
        },
        {
            _id: ObjectId("674138636c0973f433b151ce"),
            category_id: ObjectId("673cb3eb652666000535468d"),
            product_name: "ViewSonic VA2708-2K-MHD 27-inch",
            product_description: "The ViewSonic VA2708-2K-MHD features a 27-inch QHD (2560x1440) resolution display with IPS panel technology, delivering vibrant colors and wide viewing angles. With 100% sRGB coverage and HDR10 support, it's ideal for both work and entertainment.",
            product_price: 219,
            product_img: "https://res.cloudinary.com/doikoud7x/image/upload/v1747409900/NodeJS_FinalProject/products/kxsfchkrzgtcceon9xms.webp",
            createdAt: new Date("2024-11-22T00:00:00Z"),
            updatedAt: new Date("2024-11-22T00:00:00Z"),
            deleted: false
        },
        {
            _id: ObjectId("674138636c0973f433b151cf"),
            category_id: ObjectId("673cb3eb652666000535468d"),
            product_name: "ASUS VU279CFE 27-inch",
            product_description: "ASUS VU279CFE 27-inch IPS monitor with Full HD resolution, 75Hz refresh rate, and AMD FreeSync technology. Features frameless design, flicker-free and low blue light technology for comfortable viewing.",
            product_price: 349,
            product_img: "https://res.cloudinary.com/doikoud7x/image/upload/v1747411325/NodeJS_FinalProject/products/ydw2y7lhcpplkq7axikc.webp",
            createdAt: new Date("2024-11-22T00:00:00Z"),
            updatedAt: new Date("2024-11-22T00:00:00Z"),
            deleted: false
        },
        {
            _id: ObjectId("674138636c0973f433b151d0"),
            category_id: ObjectId("673cb3eb652666000535468d"),
            product_name: "Dell Ultrasharp U2723QE 27-inch",
            product_description: "The Dell Ultrasharp U2723QE features a 27-inch 4K UHD (3840 x 2160) IPS Black panel with 90W USB-C connectivity, 100% sRGB and 98% DCI-P3 color coverage, and HDR400 support. Ideal for professional designers and content creators.",
            product_price: 699,
            product_img: "https://res.cloudinary.com/doikoud7x/image/upload/v1747413889/NodeJS_FinalProject/products/rggzr9lnvzqsudy57jrn.webp",
            createdAt: new Date("2024-11-22T00:00:00Z"),
            updatedAt: new Date("2024-11-22T00:00:00Z"),
            deleted: false
        },
    ]
)

// product category
db.createCollection('product_category');
db.product_category.insertMany(
    [
         {
            _id: ObjectId("673cb3eb652666000535468b"),
            category_name: "PC",
            description: "This category includes desktop computers and assembled PC setups designed for gaming, working, or productivity tasks."
        },
        {
            _id: ObjectId("673cb3eb652666000535468c"),
            category_name: "Laptop",
            description: "This category features portable computers combining powerful hardware and mobility, ideal for work, study, and gaming."
        },
        {
            _id: ObjectId("673cb3eb652666000535468d"),
            category_name: "Screen",
            description: "This category features computer monitors of various sizes and resolutions, suitable for gaming, work, and entertainment."
        },
        {
            _id: ObjectId("674e9fb2b5963e58692581d6"),
            category_name: "Keyboard",
            description: "This category includes mechanical and membrane keyboards used for typing, gaming, and productivity."
        }
    ]
)

// product variant
db.createCollection('product_variant');
db.product_variant.insertMany(
    [
        //pc
        {
            "_id": ObjectId("6745d433a409da88028f01b2"),
            "product_id": ObjectId("674138636c0973f433b151a5"),
            "product_name": "PC ST Mercury R7",
            "product_color": "Black",
            "variant_quantity": 119,
            "product_image": "https://res.cloudinary.com/doikoud7x/image/upload/v1747399443/NodeJS_FinalProject/products/arffjyuzhueys4w1stlb.jpg",
            "retail_price": 1250,
            "variant_ROM": "1TB SSD",
            "variant_RAM": "32GB DDR4",
            "variant_operation_system": "Windows 11",
            "variant_chipset": "AMD B550",
            "variant_graphic_card": "RTX 4060Ti 8GB",
            "variant_screen": "",
            "variant_cpu": "AMD Ryzen 7 5700X (8 cores, 16 threads)",
            "variant_weight": "",
            "createdAt": new Date("2024-11-22T00:00:00Z"),
            "updatedAt": new Date("2024-11-22T00:00:00Z")
        },
        {
            "_id": ObjectId("6745d433a409da88028f01b4"),
            "product_id": ObjectId("674138636c0973f433b151a6"),
            "product_name": "PC Gaming Star ASUS ROG White Intel i5 14400F RTX 4060",
            "product_color": "White",
            "variant_quantity": 19,
            "product_image": "https://res.cloudinary.com/doikoud7x/image/upload/v1747397905/NodeJS_FinalProject/products/fr6hjokirbjankatygoe.png",
            "retail_price": 1000,
            "variant_ROM": "500GB SSD",
            "variant_RAM": "32GB",
            "variant_operation_system": "Windows 11",
            "variant_chipset": "Intel B760",
            "variant_graphic_card": "NVIDIA RTX 4060",
            "variant_screen": "",
            "variant_cpu": "Intel Core i5-14400F",
            "variant_weight": "",
            "createdAt": new Date("2024-11-22T00:00:00Z"),
            "updatedAt": new Date("2024-11-22T00:00:00Z")
        },
        {
            "_id": ObjectId("6745d433a409da88028f01b6"),
            "product_id": ObjectId("674138636c0973f433b151a7"),
            "product_name": "PC Gaming Star MSI Yasuo",
            "product_color": "Black",
            "variant_quantity": 50,
            "product_image": "https://res.cloudinary.com/doikoud7x/image/upload/v1747394491/NodeJS_FinalProject/products/pc.jpg",
            "retail_price": 1200,
            "variant_ROM": "500GB SSD",
            "variant_RAM": "16GB",
            "variant_operation_system": "Windows 11",
            "variant_chipset": "Intel B760M",
            "variant_graphic_card": "NVIDIA GeForce RTX 3060 12GB",
            "variant_screen": "",
            "variant_cpu": "Intel Core i5-12400F",
            "variant_weight": "Approx. 10kg",
            "createdAt": new Date("2024-11-22T00:00:00Z"),
            "updatedAt": new Date("2024-11-22T00:00:00Z")
        },
        {
            "_id": ObjectId("6745d433a409da88028f01bc"),
            "product_id": ObjectId("674138636c0973f433b151a8"),
            "product_name": "PC Gaming Star Yone R7 7800X3D RTX 4060Ti",
            "product_color": "Black",
            "variant_quantity": 50,
            "product_image": "https://res.cloudinary.com/doikoud7x/image/upload/v1747399763/NodeJS_FinalProject/products/nsqpe8xwas1cnbwhfnox.png",
            "retail_price": 1500,
            "variant_ROM": "500GB SSD",
            "variant_RAM": "16GB",
            "variant_operation_system": "Windows 11",
            "variant_chipset": "AMD B650M",
            "variant_graphic_card": "NVIDIA RTX 4060Ti 16GB",
            "variant_screen": "",
            "variant_cpu": "AMD Ryzen 7 7800X3D",
            "variant_weight": "Approx 10kg",
            "createdAt": new Date("2024-11-22T00:00:00Z"),
            "updatedAt": new Date("2024-11-22T00:00:00Z")
        },
        {
            _id: ObjectId("6745d433a409da88028f01be"),
            product_id: ObjectId("674138636c0973f433b151a9"),
            product_name: "PC Gaming R5 Mini",
            product_color: "Black",
            variant_quantity: 19,
            product_image: "https://res.cloudinary.com/doikoud7x/image/upload/v1747399858/NodeJS_FinalProject/products/wre2v7qv9ohx2xhiwpwg.jpg",
            retail_price: 100,
            variant_ROM: "512GB SSD",
            variant_RAM: "16GB DDR4",
            variant_operation_system: "Windows 11",
            variant_chipset: "AMD B550",
            variant_graphic_card: "NVIDIA GeForce RTX 3060 Ti 8GB",
            variant_screen: "",
            variant_cpu: "AMD Ryzen 5 5600 (3.5GHz up to 4.4GHz, 6 cores, 12 threads)",
            variant_weight: "Approx. 5kg"
        },
        {
            _id: ObjectId("6745d433a409da88028f01c1"),
            product_id: ObjectId("674138636c0973f433b151aa"),
            product_name: "Wireless Mechanical Keyboard E-DRA EK368L",
            product_color: "Alpha (Gray)",
            variant_quantity: 25,
            product_image: "https://res.cloudinary.com/doikoud7x/image/upload/v1747414804/NodeJS_FinalProject/products/sg4yp9i16mprer1aypj5.png",
            retail_price: 50,
            variant_ROM: "",
            variant_RAM: "",
            variant_operation_system: "",
            variant_chipset: "",
            variant_graphic_card: "",
            variant_screen: "",
            variant_cpu: "",
            variant_weight: "800g",
            variant_switch_type: "Red Switch",
            variant_connection: "Bluetooth 5.0 + USB Type-C",
            variant_battery: "2000mAh",
            variant_backlight: "RGB",
        },
        {
            _id: ObjectId("6745d433a409da88028f01c2"),
            product_id: ObjectId("674138636c0973f433b151aa"),
            product_name: "Wireless Mechanical Keyboard E-DRA EK368L",
            product_color: "White - Black",
            variant_quantity: 7,
            product_image: "https://res.cloudinary.com/doikoud7x/image/upload/v1747414839/NodeJS_FinalProject/products/gnluugrvhibvdmfwylad.webp",
            retail_price: 55,
            variant_ROM: "",
            variant_RAM: "",
            variant_operation_system: "",
            variant_chipset: "",
            variant_graphic_card: "",
            variant_screen: "",
            variant_cpu: "",
            variant_weight: "800g",
            variant_switch_type: "Red Switch",
            variant_connection: "Bluetooth 5.0 + USB Type-C",
            variant_battery: "2000mAh",
            variant_backlight: "RGB",
        },
        
        
        {
            _id: ObjectId("6745d433a409da88028f01c4"),
            product_id: ObjectId("674138636c0973f433b151ab"),
            product_name: "AULA S2022 Mechanical Keyboard",
            product_color: "Black",
            variant_quantity: 20,
            product_image: "https://res.cloudinary.com/doikoud7x/image/upload/v1747415331/NodeJS_FinalProject/products/jmztryht9gjgdzdkbzzh.png",
            retail_price: 34,
            variant_ROM: "",
            variant_RAM: "",
            variant_operation_system: "",
            variant_chipset: "",
            variant_graphic_card: "",
            variant_screen: "",
            variant_cpu: "",
            variant_weight: "1.1kg (2.43 lbs)",
            variant_switch_type: "Blue Switch (Tactile & Clicky)",
            variant_connection: "Wired USB",
            variant_backlight: "RGB LED",
        },
        {
            _id: ObjectId("6745d433a409da88028f01c5"),
            product_id: ObjectId("674138636c0973f433b151ab"),
            product_name: "AULA S2022 Mechanical Keyboard",
            product_color: "Blue",
            variant_quantity: 19,
            product_image: "https://res.cloudinary.com/doikoud7x/image/upload/v1747415347/NodeJS_FinalProject/products/erhdna6neleqkzkb1r9r.webp",
            retail_price: 34,
            variant_ROM: "",
            variant_RAM: "",
            variant_operation_system: "",
            variant_chipset: "",
            variant_graphic_card: "",
            variant_screen: "",
            variant_cpu: "",
            variant_weight: "1.1kg (2.43 lbs)",
            variant_switch_type: "Blue Switch (Tactile & Clicky)",
            variant_connection: "Wired USB",
            variant_backlight: "RGB LED",
        },
        {
            _id: ObjectId("6745d433a409da88028f01c3"),
            product_id: ObjectId("674138636c0973f433b151ab"),
            product_name: "AULA S2022 Mechanical Keyboard",
            product_color: "Pink",
            variant_quantity: 9,
            product_image: "https://res.cloudinary.com/doikoud7x/image/upload/v1747415351/NodeJS_FinalProject/products/jzz0n6ho2n7sq3yikbwe.webp",
            retail_price: 34,
            variant_ROM: "",
            variant_RAM: "",
            variant_operation_system: "",
            variant_chipset: "",
            variant_graphic_card: "",
            variant_screen: "",
            variant_cpu: "",
            variant_weight: "1.1kg (2.43 lbs)",
            variant_switch_type: "Blue Switch (Tactile & Clicky)",
            variant_connection: "Wired USB",
            variant_backlight: "RGB LED",
        },
        {
            _id: ObjectId("6745d433a409da88028f01b9"),
            product_id: ObjectId("674138636c0973f433b151ab"),
            product_name: "AULA S2022 Mechanical Keyboard",
            product_color: "Green",
            variant_quantity: 15,
            product_image: "https://res.cloudinary.com/doikoud7x/image/upload/v1747415365/NodeJS_FinalProject/products/sphboeiqqpjaahqfxbla.webp",
            retail_price: 34,
            variant_ROM: "",
            variant_RAM: "",
            variant_operation_system: "",
            variant_chipset: "",
            variant_graphic_card: "",
            variant_screen: "",
            variant_cpu: "",
            variant_weight: "1.1kg (2.43 lbs)",
            variant_switch_type: "Blue Switch (Tactile & Clicky)",
            variant_connection: "Wired USB",
            variant_backlight: "RGB LED",
        },
    
        {
            _id: ObjectId("6745d433a409da88028f01c6"),
            product_id: ObjectId("674138636c0973f433b151ac"),
            product_name: "AULA AC306 Wireless Keyboard and Mouse Combo",
            product_color: "Black",
            variant_quantity: 20,
            product_image: "https://res.cloudinary.com/doikoud7x/image/upload/v1747416745/NodeJS_FinalProject/products/x33qyth2avztix1l9nxn.webp",
            retail_price: 33,
            variant_ROM: "",
            variant_RAM: "",
            variant_operation_system: "",
            variant_chipset: "",
            variant_graphic_card: "",
            variant_screen: "",
            variant_cpu: "",
            variant_weight: "600g"
        },
        {
            _id: ObjectId("6745d433a409da88028f01c7"),
            product_id: ObjectId("674138636c0973f433b151ac"),
            product_name: "AULA AC306 Wireless Keyboard and Mouse Combo",
            product_color: "Blue",
            variant_quantity: 23,
            product_image: "https://res.cloudinary.com/doikoud7x/image/upload/v1747416777/NodeJS_FinalProject/products/trhctn62sssdfepv7hfn.webp",
             retail_price: 33,
            variant_ROM: "",
            variant_RAM: "",
            variant_operation_system: "",
            variant_chipset: "",
            variant_graphic_card: "",
            variant_screen: "",
            variant_cpu: "",
            variant_weight: "600g"
        },

        {
            _id: ObjectId("6745d433a409da88028f01c8"),
            product_id: ObjectId("674138636c0973f433b151ad"),
            product_name: "AULA F75 Reaper Wireless Mechanical Keyboard",
            product_color: "Ice Green",
            variant_quantity: 24,
            product_image: "https://res.cloudinary.com/doikoud7x/image/upload/v1747417579/NodeJS_FinalProject/products/hicsk107lgtvrbjxagut.webp",
            retail_price: 89,
            variant_ROM: "",
            variant_RAM: "",
            variant_operation_system: "",
            variant_chipset: "",
            variant_graphic_card: "",
            variant_screen: "",
            variant_cpu: "",
            variant_weight: "850g",
            variant_switch_type: "AULA Reaper Switch",
            variant_connection: "Wireless 2.4GHz/Bluetooth/Type-C",
            variant_battery: "3000mAh",
        },
        {
            _id: ObjectId("6745d433a409da88028f01c9"),
            product_id: ObjectId("674138636c0973f433b151ad"),
            product_name: "AULA F75 Reaper Wireless Mechanical Keyboard",
            product_color: "Black Yellow",
            variant_quantity: 25,
            product_image: "https://res.cloudinary.com/doikoud7x/image/upload/v1747417902/NodeJS_FinalProject/products/h69fafn9cys8gqw8hbwj.webp",
            retail_price: 85,
            variant_ROM: "",
            variant_RAM: "",
            variant_operation_system: "",
            variant_chipset: "",
            variant_graphic_card: "",
            variant_screen: "",
            variant_cpu: "",
            variant_weight: "850g",
            variant_switch_type: "AULA Reaper Switch",
            variant_connection: "Wireless 2.4GHz/Bluetooth/Type-C",
            variant_battery: "3000mAh",
        },


        {
            _id: ObjectId("6745d433a409da88028f01ca"),
            product_id: ObjectId("674138636c0973f433b151ae"),
            product_name: "MSI Katana 15 Gaming Laptop",
            product_color: "Black",
            variant_quantity: 25,
            product_image: "https://res.cloudinary.com/doikoud7x/image/upload/v1747420071/NodeJS_FinalProject/products/d9xnapzexz2uxy9mwznr.jpg",
            retail_price: 1299,
            variant_ROM: "1TB SSD",
            variant_RAM: "16GB DDR5",
            variant_operation_system: "Windows 11",
            variant_chipset: "Intel Core i7-13620H",
            variant_graphic_card: "NVIDIA RTX 4060 8GB",
            variant_screen: "15.6\" FHD 144Hz",
            variant_cpu: "14-core (6P+8E)",
            variant_weight: "2.25kg"
        },
        {
            _id: ObjectId("6745d433a409da88028f01cc"),
            product_id: ObjectId("674138636c0973f433b151af"),
            product_name: "Dell XPS 15 Professional Laptop",
            product_color: "Black",
            variant_quantity: 25,
            product_image: "https://res.cloudinary.com/doikoud7x/image/upload/v1747420194/NodeJS_FinalProject/products/issjmzmyqkyqajctk37q.webp",
            retail_price: 2199,
            variant_ROM: "2TB SSD",
            variant_RAM: "32GB DDR5",
            variant_operation_system: "Windows 11 Pro",
            variant_chipset: "Intel Core i9-13900H",
            variant_graphic_card: "NVIDIA RTX 4070 8GB",
            variant_screen: "15.6\" QHD 165Hz",
            variant_cpu: "14-core (6P+8E)",
            variant_weight: "2.25kg",
        },
        {
            _id: ObjectId("6745d433a409da88028f01cf"),
            product_id: ObjectId("674138636c0973f433b151b0"),
            product_name: "Apple MacBook Air M2",
            product_color: "Midnight",
            variant_quantity: 25,
            product_image: "https://res.cloudinary.com/doikoud7x/image/upload/v1747420300/NodeJS_FinalProject/products/tugdcx0jk2kbpxqhsaof.jpg",
            retail_price: 999,
            variant_ROM: "256GB SSD",
            variant_RAM: "8GB Unified",
            variant_operation_system: "macOS Ventura",
            variant_chipset: "Apple M2",
            variant_graphic_card: "10-core GPU",
            variant_screen: "13.6\" Liquid Retina",
            variant_cpu: "",
            variant_weight: "1.24kg"
        },
    //
        {
            _id: ObjectId("6745d433a409da88028f01d0"),
            product_id: ObjectId("674138636c0973f433b151b0"),
            product_name: "Apple MacBook Air M2",
            product_color: "Starlight",
            variant_quantity: 25,
            product_image: "https://res.cloudinary.com/doikoud7x/image/upload/v1747420900/NodeJS_FinalProject/products/ap0ktkxw4nw6v5srp04n.jpg",
            retail_price: 1299,
            variant_ROM: "512GB SSD",
            variant_RAM: "16GB Unified",
            variant_operation_system: "macOS Ventura",
            variant_chipset: "Apple M2",
            variant_graphic_card: "10-core GPU",
            variant_screen: "13.6\" Liquid Retina",
            variant_cpu: "",
            variant_weight: "1.24kg"
        },
        {
            _id: ObjectId("6745d433a409da88028f01d1"),
            product_id: ObjectId("674138636c0973f433b151b1"),
            product_name: "ASUS ROG Zephyrus G14",
            product_color: "Grey",
            variant_quantity: 25,
            product_image: "https://res.cloudinary.com/doikoud7x/image/upload/v1747421277/NodeJS_FinalProject/products/srpuih2hjynahwvfvma7.webp",
            retail_price: 2009,
            variant_ROM: "1TB SSD",
            variant_RAM: "16GB DDR5",
            variant_operation_system: "Windows 11",
            variant_chipset: "AMD Ryzen 9 7940HS",
            variant_graphic_card: "NVIDIA RTX 4060 8GB",
            variant_screen: "14\" QHD 165Hz",
            variant_cpu: "",
            variant_weight: "1.72kg"
        },
        {
            _id: ObjectId("6745d433a409da88028f01d3"),
            product_id: ObjectId("674138636c0973f433b151b2"),
            product_name: "Microsoft Surface Laptop 5",
            product_color: "Platinum",
            variant_quantity: 25,
            product_image: "https://res.cloudinary.com/doikoud7x/image/upload/v1747421672/NodeJS_FinalProject/products/uktekfpjqk1w6xevnbys.webp",
            retail_price: 1299,
            variant_ROM: "512GB SSD",
            variant_RAM: "16GB LPDDR5",
            variant_operation_system: "Windows 11",
            variant_chipset: "Intel Core i7-1255U",
            variant_graphic_card: "Intel Iris Xe",
            variant_screen: "13.5\" PixelSense Touch",
            variant_cpu: "",
            variant_weight: "1.27kg"
        },
        {
            _id: ObjectId("6745d433a409da88028f01d4"),
            product_id: ObjectId("674138636c0973f433b151b2"),
            product_name: "Microsoft Surface Laptop 5",
            product_color: "Sage",
            variant_quantity: 25,
            product_image: "https://res.cloudinary.com/doikoud7x/image/upload/v1747421933/NodeJS_FinalProject/products/a0ibfcqlecwnu8jcksvi.webp",
            retail_price: 1199,
            variant_ROM: "256GB SSD",
            variant_RAM: "8GB LPDDR5",
            variant_operation_system: "Windows 11",
            variant_chipset: "Intel Core i7-1255U",
            variant_graphic_card: "Intel Iris Xe",
            variant_screen: "13.5\" PixelSense Touch",
            variant_cpu: "",
            variant_weight: "1.27kg"
        },
        {
            _id: ObjectId("6745d433a409da88028f01d5"),
            product_id: ObjectId("674138636c0973f433b151b3"),
            product_name: "Acer Swift X Creator Laptop",
            product_color: "Grey",
            variant_quantity: 25,
            product_image: "https://res.cloudinary.com/doikoud7x/image/upload/v1747422149/NodeJS_FinalProject/products/omkftjoi07hf1rvcx0ng.webp",
            retail_price: 1090,
            variant_ROM: "256GB SSD",
            variant_RAM: "8GB LPDDR4",
            variant_operation_system: "Windows 11",
            variant_chipset: "AMD Ryzen 7 5825U",
            variant_graphic_card: "NVIDIA RTX 3050 Ti 4GB",
            variant_screen: "14\" FHD IPS",
            variant_cpu: "",
            variant_weight: "1.39kg"
        },
        {
            _id: ObjectId("6745d433a409da88028f01d6"),
            product_id: ObjectId("674138636c0973f433b151b3"),
            product_name: "Acer Swift X Creator Laptop",
            product_color: "Blue",
            variant_quantity: 25,
            product_image: "https://res.cloudinary.com/doikoud7x/image/upload/v1747422382/NodeJS_FinalProject/products/qly4sx5ku5pxsovqhqq1.webp",
            retail_price: 1119,
            variant_ROM: "512GB SSD",
            variant_RAM: "16GB LPDDR4",
            variant_operation_system: "Windows 11",
            variant_chipset: "AMD Ryzen 7 5825U",
            variant_graphic_card: "NVIDIA RTX 3050 Ti 4GB",
            variant_screen: "14\" FHD IPS",
            variant_cpu: "",
            variant_weight: "1.39kg"
        },
        {
            _id: ObjectId("6745d433a409da88028f01d8"),
            product_id: ObjectId("674138636c0973f433b151b4"),
            product_name: "Razer Blade 15 Gaming Laptop",
            product_color: "Black",
            variant_quantity: 25,
            product_image: "https://res.cloudinary.com/doikoud7x/image/upload/v1747422630/NodeJS_FinalProject/products/ufoqw7syhqiwsyusi9g8.jpg",
            retail_price: 1139,
            variant_ROM: "1TB PCIe SSD",
            variant_RAM: "16GB DDR5",
            variant_operation_system: "Windows 11",
            variant_chipset: "Intel Core i7-12800H",
            variant_graphic_card: "NVIDIA RTX 3070 Ti 8GB",
            variant_screen: "15.6\" QHD 240Hz",
            variant_cpu: "",
            variant_weight: "2.01kg"
        },
    //
        {
            "_id": ObjectId("6745d433a409da88028f01da"),
            "product_id": ObjectId("674138636c0973f433b151b5"),
            "product_name": "LG Gram 17 Ultra-Light Laptop",
            "product_color": "Dark Silver",
            "variant_quantity": 24,
            "product_image": "https://res.cloudinary.com/doikoud7x/image/upload/v1747422892/NodeJS_FinalProject/products/ogza7tshuqcvfjocssqf.jpg",
            "retail_price": 1699,
            "variant_ROM": "1TB SSD",
            "variant_RAM": "16GB LPDDR5",
            "variant_operation_system": "Windows 11 Home",
            "variant_chipset": "Intel Core i7-1260P",
            "variant_graphic_card": "Intel Iris Xe",
            "variant_screen": "17\" WQXGA IPS",
            "variant_cpu": "",
            "variant_weight": "1.35kg"
        },
        {
            "_id": ObjectId("6745d433a409da88028f01fa"),
            "product_id": ObjectId("674138636c0973f433b151c3"),
            "product_name": "DELL Latitude 5490 Core i5 7th Gen Laptop",
            "product_color": "Black",
            "variant_quantity": 23,
            "product_image": "https://res.cloudinary.com/dervs0fx5/image/upload/v1732547455/NodeJS_FinalProject/products/phones/q0b7prsft9vihgx9fkdw.jpg",
            "retail_price": 310,
            "variant_ROM": "256 GB",
            "variant_RAM": "8 GB RAM DDR4 2400MHz",
            "variant_operation_system": "Window 11",
            "variant_chipset": "Intel Core™ i5 7300u 2.6 GHz upto 3.5 GHz, 3 MB Intel® Smart Cache",
            "variant_graphic_card": "Intel® UHD Graphics 620",
            "variant_screen": "14.0 inch Anti-Glare LED Backlit Display 1366x768 HD",
            "variant_cpu": "Intel Core™ i5 7300u 2.6 GHz upto 3.5 GHz, 3 MB Intel® Smart Cache",
            "variant_weight": "1.5kg"
        },
        {
            "_id": ObjectId("6745d433a409da88028f01fb"),
            "product_id": ObjectId("674138636c0973f433b151c4"),
            "product_name": "HP Chromebook C640 10th Gen Intel Core i5 Thin & Light FHD Laptop",
            "product_color": "Silver",
            "variant_quantity": 24,
            "product_image": "https://res.cloudinary.com/dervs0fx5/image/upload/v1732547538/NodeJS_FinalProject/products/phones/ndji8gipx3gfj1jsfd3p.jpg",
            "retail_price": 610,
            "variant_ROM": "64GB M.2 PCIe NVMe SSD",
            "variant_RAM": "8 GB RAM DDR4 2400MHz",
            "variant_operation_system": "Window 11",
            "variant_chipset": "Intel Core i5 (10th Gen) i5-10310U Quad-core (4 Core) 1.70 GHz",
            "variant_graphic_card": "Intel UHD Graphics",
            "variant_screen": "14-inch FHD (1920 x 1080) Touch-Screen",
            "variant_cpu": "Intel Core i5 (10th Gen) i5-10310U Quad-core (4 Core) 1.70 GHz",
            "variant_weight": "1.5kg"
        },
        {
            "_id": ObjectId("6745d433a409da88028f01fc"),
            "product_id": ObjectId("674138636c0973f433b151c5"),
            "product_name": "Lenovo ThinkPad X260 High Performance 12.5 inch IPS Panel 1.5kg Laptop",
            "product_color": "Black",
            "variant_quantity": 24,
            "product_image": "https://res.cloudinary.com/dervs0fx5/image/upload/v1732547611/NodeJS_FinalProject/products/phones/npnhzszjcszlohshkotd.jpg",
            "retail_price": 562,
            "variant_ROM": "256 GB",
            "variant_RAM": "8 GB RAM DDR4 (Onboard)",
            "variant_operation_system": "Windows 10 Pro",
            "variant_chipset": "Intel Core i5 (6th Gen) i5-6500U Quad-core (4 Core) 1.70 GHz",
            "variant_graphic_card": "Intel UHD Graphics",
            "variant_screen": "12.5-inch Full HD (1920 x 1080)",
            "variant_cpu": "Intel Core i5 (6th Gen) i5-6500U Quad-core (4 Core) 1.70 GHz",
            "variant_weight": "3.1kg"
        },
        {
            "_id": ObjectId("6745d433a409da88028f01fd"),
            "product_id": ObjectId("674138636c0973f433b151c6"),
            "product_name": "Lenovo ThinkPad T450 Intel Core i5-5300U 14 inches Business Laptop Computer",
            "product_color": "Black",
            "variant_quantity": 22,
            "product_image": "https://res.cloudinary.com/dervs0fx5/image/upload/v1732547703/NodeJS_FinalProject/products/phones/bkow5o9cw7wrnuoastfs.jpg",
            "retail_price": 193,
            "variant_ROM": "128 GB",
            "variant_RAM": "8 GB RAM DDR4 (Onboard)",
            "variant_operation_system": "Windows 10 Pro",
            "variant_chipset": "Intel® Core™ i5-5300U Processor (3M Cache, up to 2.90 GHz)",
            "variant_graphic_card": "Intel UHD Graphics",
            "variant_screen": "14.0 Anti-Glare LED-backlit (1366x768)",
            "variant_cpu": "Intel® Core™ i5-5300U Processor (3M Cache, up to 2.90 GHz)",
            "variant_weight": "3.1kg"
        },
        {
            "_id": ObjectId("6745d433a409da88028f01fe"),
            "product_id": ObjectId("674138636c0973f433b151c7"),
            "product_name": "HP Victus Gaming Latest FHD Gaming Laptop",
            "product_color": "Black",
            "variant_quantity": 25,
            "product_image": "https://res.cloudinary.com/dervs0fx5/image/upload/v1732547808/NodeJS_FinalProject/products/phones/xzdij9cija2oycweree7.jpg",
            "retail_price": 750,
            "variant_ROM": "512 GB SSD NVMe PCIe",
            "variant_RAM": "16 GB RAM DDR5",
            "variant_operation_system": "Windows 11",
            "variant_chipset": "AMD Ryzen 5 - 7535HS Turbo Boost 4.55 GHz",
            "variant_graphic_card": "NVIDIA GeForce RTX 2050, 4 GB",
            "variant_screen": "15.6 Full HD (1920 x 1080)",
            "variant_cpu": "AMD Ryzen 5 - 7535HS Turbo Boost 4.55 GHz",
            "variant_weight": "3.1kg"
        },
        {
            "_id": ObjectId("6745d433a409da88028f01ff"),
            "product_id": ObjectId("674138636c0973f433b151c9"),
            "product_name": "Acer Aspire 5 Gaming Laptop Intel Core i5 12th gen",
            "product_color": "Black",
            "variant_quantity": 24,
            "product_image": "https://res.cloudinary.com/dervs0fx5/image/upload/v1732548020/NodeJS_FinalProject/products/phones/lg5qi5ymyiywplyfulw2.jpg",
            "retail_price": 649,
            "variant_ROM": "512 GB SSD NVMe PCIe",
            "variant_RAM": "16 GB RAM DDR4",
            "variant_operation_system": "Windows 11",
            "variant_chipset": "Intel Core i5 Raptor Lake - 13420H",
            "variant_graphic_card": "NVIDIA GeForce RTX 2050, 4 GB",
            "variant_screen": "15.6 Full HD (1920 x 1080)",
            "variant_cpu": "Intel Core i5 Raptor Lake - 13420H",
            "variant_weight": "3.1kg"
        },
        {
            "_id": ObjectId("6745d433a409da88028f0200"),
            "product_id": ObjectId("674138636c0973f433b151ca"),
            "product_name": "HP Pavilion 14 FHD Gaming Laptop",
            "product_color": "Silver",
            "variant_quantity": 25,
            "product_image": "https://res.cloudinary.com/dervs0fx5/image/upload/v1732548219/NodeJS_FinalProject/products/phones/s3ugiqjifsfold2jwbzl.jpg",
            "retail_price": 590,
            "variant_ROM": "256GB SSD PCIe® NVMe™ M.2",
            "variant_RAM": "16 GB RAM DDR4",
            "variant_operation_system": "Windows 11",
            "variant_chipset": "Core i5 1135G7 (upto 4.20 GHz - 8Mb)",
            "variant_graphic_card": "Intel® Iris® Xe Graphics",
            "variant_screen": "14 Full HD (1920 x 1080)",
            "variant_cpu": "Core i5 1135G7 (upto 4.20 GHz - 8Mb)",
            "variant_weight": "3.1kg"
        },
        {
            "_id": ObjectId("6745d433a409da88028f0201"),
            "product_id": ObjectId("674138636c0973f433b151cb"),
            "product_name": "ASUS TUF Gaming A15 Laptop",
            "product_color": "Black",
            "variant_quantity": 25,
            "product_image": "https://res.cloudinary.com/dervs0fx5/image/upload/v1732548326/NodeJS_FinalProject/products/phones/loaaw8hobifhihubgiwq.jpg",
            "retail_price": 688,
            "variant_ROM": "512GB PCIe 4.0 NVMe M.2 SSD",
            "variant_RAM": "16 GB RAM DDR5-5600 SO-DIMM",
            "variant_operation_system": "Windows 11",
            "variant_chipset": "AMD Ryzen 5 7535HS (3.3GHz, 19MB Cache, up to 4.55 GHz",
            "variant_graphic_card": "NVIDIA GeForce RTX 3050 4GB GDDR6 AMD Radeon Graphics",
            "variant_screen": "15.6 1920 x 1080 pixels (FullHD)",
            "variant_cpu": "AMD Ryzen 5 7535HS (3.3GHz, 19MB Cache, up to 4.55 GHz",
            "variant_weight": "3.1kg"
        },

        {
            _id: ObjectId("6745d433a409da88028f0202"),
            product_id: ObjectId("674138636c0973f433b151cc"),
            product_name: "Lenovo Ideapad Gaming 3",
            product_color: "Black",
            variant_quantity: 25,
            product_image: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732548414/NodeJS_FinalProject/products/phones/righyjleqb7fvtfvlb6l.jpg",
            retail_price: 876,
            variant_ROM: "512GB SSD M.2 2242 PCIe 4.0x4 NVMe",
            variant_RAM: "8 GB RAM SO-DIMM DDR4-3200",
            variant_operation_system: "Windows 11",
            variant_chipset: "AMD Ryzen 5 5500H",
            variant_graphic_card: "NVIDIA GeForce RTX 2050 4GB GDDR6",
            variant_screen: "15.6 1920 x 1080 pixels (FullHD)",
            variant_cpu: "AMD Ryzen 5 5500H",
            variant_weight: "2.5kg",
            created_at: new Date(),
            updated_at: new Date()
        },

        // screen
        {
            _id: ObjectId("6745d433a409da88028f0203"),
            product_id: ObjectId("674138636c0973f433b151cd"),
            product_name: "MSI MP251 E2 25-inch 120Hz",
            product_color: "Black",
            variant_quantity: 125,
            product_image: "https://res.cloudinary.com/doikoud7x/image/upload/v1747408499/NodeJS_FinalProject/products/thmbe10mqonsm5zptwyp.webp",
            retail_price: 199,
            variant_ROM: "",
            variant_RAM: "",
            variant_operation_system: "",
            variant_chipset: "",
            variant_graphic_card: "",
            variant_screen: "25-inch Full HD (1920x1080) IPS, 120Hz, 1ms",
            variant_cpu: "",
            variant_weight: "4.2kg",
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            "_id": ObjectId("6745d433a409da88028f01b3"),
            "product_id": ObjectId("674138636c0973f433b151cd"),
            "product_name": "MSI MP251 E2 25-inch 120Hz",
            "product_color": "White",
            "variant_quantity": 20,
            "product_image": "https://res.cloudinary.com/doikoud7x/image/upload/v1747409364/NodeJS_FinalProject/products/rr5smv54vepukivc5t5b.png",
            "retail_price": 209,
            "variant_ROM": "",
            "variant_RAM": "",
            "variant_operation_system": "",
            "variant_chipset": "",
            "variant_graphic_card": "",
            "variant_screen": "25-inch Full HD (1920x1080) IPS, 120Hz, 1ms",
            "variant_cpu": "",
            "variant_weight": "",
            "createdAt": new Date("2024-11-22T00:00:00Z"),
            "updatedAt": new Date("2024-11-22T00:00:00Z")
        },
        {
            _id: ObjectId("6745d433a409da88028f0204"),
            product_id: ObjectId("674138636c0973f433b151ce"),
            product_name: "ViewSonic VA2708-2K-MHD 27-inch",
            product_color: "Black",
            variant_quantity: 124,
            product_image: "https://res.cloudinary.com/doikoud7x/image/upload/v1747409900/NodeJS_FinalProject/products/kxsfchkrzgtcceon9xms.webp",
            retail_price: 219,
            variant_ROM: "",
            variant_RAM: "",
            variant_operation_system: "",
            variant_chipset: "",
            variant_graphic_card: "",
            variant_screen: "27-inch QHD (2560x1440) IPS, 100% sRGB, HDR10",
            variant_cpu: "",
            variant_weight: "4.5kg",
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            "_id": ObjectId("6745d433a409da88028f01b5"),
            "product_id": ObjectId("674138636c0973f433b151ce"),
            "product_name": "ViewSonic VA2708-2K-MHD 27-inch",
            "product_color": "White",
            "variant_quantity": 124,
            "product_image": "https://res.cloudinary.com/doikoud7x/image/upload/v1747410358/NodeJS_FinalProject/products/x1gxjxkqscmed2uqlemw.webp",
            "retail_price": 199,
            "variant_ROM": "",
            "variant_RAM": "",
            "variant_operation_system": "",
            "variant_chipset": "",
            "variant_graphic_card": "27-inch QHD (2560x1440) IPS, 100% sRGB, HDR10",
            "variant_screen": "",
            "variant_cpu": "",
            "variant_weight": "4.5",
            "createdAt": new Date("2024-11-22T00:00:00Z"),
            "updatedAt": new Date("2024-11-22T00:00:00Z")
        },

        {
            _id: ObjectId("6745d433a409da88028f0205"),
            product_id: ObjectId("674138636c0973f433b151cf"),
            product_name: "ASUS VU279CFE 27-inch",
            product_color: "Beige",
            variant_quantity: 124,
            product_image: "https://res.cloudinary.com/doikoud7x/image/upload/v1747411325/NodeJS_FinalProject/products/ydw2y7lhcpplkq7axikc.webp",
            retail_price: 349,
            variant_ROM: "",
            variant_RAM: "",
            variant_operation_system: "",
            variant_chipset: "",
            variant_graphic_card: "",
            variant_screen: "27-inch IPS, Full HD (1920x1080), 75Hz",
            variant_cpu: "",
            variant_weight: "4.5kg",
            variant_ports: "HDMI, VGA, DisplayPort",
            variant_features: "AMD FreeSync, Flicker-free, Low Blue Light",
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            "_id": ObjectId("6745d433a409da88028f01b7"),
            "product_id": ObjectId("674138636c0973f433b151cf"),
            "product_name": "ASUS VU279CFE 27-inch",
            "product_color": "Navy Blue",
            "variant_quantity": 100,
            "product_image": "https://res.cloudinary.com/doikoud7x/image/upload/v1747413109/NodeJS_FinalProject/products/kp1wwtsvcguv2xpxfjey.webp",
            "retail_price": 359,
            "variant_ROM": "",
            "variant_RAM": "",
            "variant_operation_system": "",
            "variant_chipset": "",
            "variant_graphic_card": "",
            "variant_screen": "27-inch IPS, Full HD (1920x1080), 75Hz",
            "variant_cpu": "",
            "variant_weight": "4.5kg",
            "variant_ports": "HDMI, VGA, DisplayPort",
            "variant_features": "AMD FreeSync, Flicker-free, Low Blue Light",
            "createdAt": new Date("2024-11-22T00:00:00Z"),
            "updatedAt": new Date("2024-11-22T00:00:00Z")
        },


        {
            _id: ObjectId("6745d433a409da88028f0206"),
            product_id: ObjectId("674138636c0973f433b151d0"),
            product_name: "Dell Ultrasharp U2723QE 27-inch",
            product_color: "White",
            variant_quantity: 125,
            product_image: "https://res.cloudinary.com/doikoud7x/image/upload/v1747413889/NodeJS_FinalProject/products/rggzr9lnvzqsudy57jrn.webp",
            retail_price: 699,
            variant_ROM: "",
            variant_RAM: "",
            variant_operation_system: "",
            variant_chipset: "",
            variant_graphic_card: "",
            variant_screen: "27-inch 4K UHD (3840 x 2160) IPS Black",
            variant_cpu: "",
            variant_weight: "6.35kg",
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            "_id": ObjectId("6745d433a409da88028f01b8"),
            "product_id": ObjectId("674138636c0973f433b151d0"),
            "product_name": "Dell Ultrasharp U2723QE 27-inch",
            "product_color": "Black",
            "variant_quantity": 15,
            "product_image": "https://res.cloudinary.com/doikoud7x/image/upload/v1747414148/NodeJS_FinalProject/products/md8c9nd4wacpooquhf9b.webp",
            "retail_price": 599,
            "variant_ROM": "",
            "variant_RAM": "",
            "variant_operation_system": "",
            "variant_chipset": "",
            "variant_graphic_card": "",
            "variant_screen": "27-inch QHD (2560 x 1440) IPS",
            "variant_cpu": "",
            "variant_weight": "6.12 kg",
            "createdAt": new Date("2024-11-22T00:00:00Z"),
            "updatedAt": new Date("2024-11-22T00:00:00Z")
        },
    ]
)

// rating
db.createCollection('rating');
db.rating.insertMany(
    [
        {
            _id: ObjectId("6745a54598c37682a859650a"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            deleted: false,
            createdAt: new Date("2024-11-26T10:39:01.149Z"),
            updatedAt: new Date("2024-11-26T10:39:01.149Z"),
            __v: 0,
            star: 4
        },
        {
            _id: ObjectId("6745a876a24c46141ed3bb0d"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            star: 4,
            deleted: false,
            createdAt: new Date("2024-11-26T10:52:38.282Z"),
            updatedAt: new Date("2024-11-26T10:52:38.282Z"),
            __v: 0
        },
        {
            _id: ObjectId("6745a8e1e76633d70457c8f3"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            star: 2,
            deleted: false,
            createdAt: new Date("2024-11-26T10:54:25.661Z"),
            updatedAt: new Date("2024-11-26T10:54:25.661Z"),
            __v: 0
        },
        {
            _id: ObjectId("6745a8ede76633d70457c8f5"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            star: 2,
            deleted: false,
            createdAt: new Date("2024-11-26T10:54:37.791Z"),
            updatedAt: new Date("2024-11-26T10:54:37.791Z"),
            __v: 0
        },
        {
            _id: ObjectId("6745a8f0e76633d70457c8f7"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            star: 2,
            deleted: false,
            createdAt: new Date("2024-11-26T10:54:40.680Z"),
            updatedAt: new Date("2024-11-26T10:54:40.680Z"),
            __v: 0
        },
        {
            _id: ObjectId("6745aa6de76633d70457c911"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            star: 5,
            deleted: false,
            createdAt: new Date("2024-11-26T11:01:01.836Z"),
            updatedAt: new Date("2024-11-26T11:01:01.836Z"),
            __v: 0
        },
        {
            _id: ObjectId("674686fd4975aec49b3cc9da"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a9"),
            star: 4,
            deleted: false,
            createdAt: new Date("2024-11-27T02:42:05.395Z"),
            updatedAt: new Date("2024-11-27T02:42:05.395Z"),
            __v: 0
        },
        {
            _id: ObjectId("67468ab54975aec49b3cca42"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            star: 1,
            deleted: false,
            createdAt: new Date("2024-11-27T02:57:57.989Z"),
            updatedAt: new Date("2024-11-27T02:57:57.989Z"),
            __v: 0
        },
        {
            _id: ObjectId("675482d394940a4b7fd0ec9b"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            star: 1,
            deleted: false,
            createdAt: new Date("2024-12-07T17:16:03.836Z"),
            updatedAt: new Date("2024-12-07T17:16:03.836Z"),
            __v: 0
        },
        {
            _id: ObjectId("6754832394940a4b7fd0ecb0"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            star: 5,
            deleted: false,
            createdAt: new Date("2024-12-07T17:17:23.644Z"),
            updatedAt: new Date("2024-12-07T17:17:23.644Z"),
            __v: 0
        },
        {
            _id: ObjectId("6754838c0e58b2db0ac6febe"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            star: 0,
            deleted: false,
            createdAt: new Date("2024-12-07T17:19:08.143Z"),
            updatedAt: new Date("2024-12-07T17:19:08.143Z"),
            __v: 0
        },
        {
            _id: ObjectId("675483c763f6d3f15fd94af7"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            star: 1,
            deleted: false,
            createdAt: new Date("2024-12-07T17:20:07.537Z"),
            updatedAt: new Date("2024-12-07T17:20:07.537Z"),
            __v: 0
        },
        {
            _id: ObjectId("675483cd63f6d3f15fd94b03"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            star: 1,
            deleted: false,
            createdAt: new Date("2024-12-07T17:20:13.776Z"),
            updatedAt: new Date("2024-12-07T17:20:13.776Z"),
            __v: 0
        },
        {
            _id: ObjectId("67548453dd77929dbe88f4bf"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            star: 1,
            deleted: false,
            createdAt: new Date("2024-12-07T17:22:27.110Z"),
            updatedAt: new Date("2024-12-07T17:22:27.110Z"),
            __v: 0
        },
        {
            _id: ObjectId("675484b018defbbb85016e69"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            star: 1,
            deleted: false,
            createdAt: new Date("2024-12-07T17:24:00.521Z"),
            updatedAt: new Date("2024-12-07T17:24:00.521Z"),
            __v: 0
        },
        {
            _id: ObjectId("675488d20d29ad8cbf52b1ab"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            star: 3,
            deleted: false,
            createdAt: new Date("2024-12-07T17:41:38.498Z"),
            updatedAt: new Date("2024-12-07T17:41:38.498Z"),
            __v: 0
        },
        {
            _id: ObjectId("675488e40d29ad8cbf52b1c7"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            star: 5,
            deleted: false,
            createdAt: new Date("2024-12-07T17:41:56.397Z"),
            updatedAt: new Date("2024-12-07T17:41:56.397Z"),
            __v: 0
        },
        {
            _id: ObjectId("675489c805fc1b88d5f2ced7"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            star: 4,
            deleted: false,
            createdAt: new Date("2024-12-07T17:45:44.828Z"),
            updatedAt: new Date("2024-12-07T17:45:44.828Z"),
            __v: 0
        }
    ]
)

// role
db.createCollection('role');
db.role.insertMany(
    [
        {
            _id: ObjectId("673724fc35224c690dbd21c2"),
            role_name: "Admin"
        },
        {
            _id: ObjectId("6737252735224c690dbd21c3"),
            role_name: "Customer"
        }
    ]
)

// user
db.createCollection('user');
db.user.insertMany(
    [
        {
            "_id": ObjectId("674067eac35c263bdad6c769"),
            "fullName": "Công ĐRL",
            "email": "c3tcdrl@gmail.com",
            "profile_image": "https://res.cloudinary.com/dervs0fx5/image/upload/v1709054146/cl0hmsqdjl1lwnahek0i.png",
            "deleted": false,
            "createdAt": new Date("2024-11-22T11:15:54.284Z"),
            "updatedAt": new Date("2024-12-07T18:10:21.378Z"),
            "__v": 0,
            "point": 93
        },
        {
            "_id": ObjectId("6741a5294ccb29381f082373"),
            "fullName": "Thái Công",
            "email": "thanhcongzxc456@gmail.com",
            "profile_image": "https://res.cloudinary.com/doikoud7x/image/upload/v1747390953/NodeJS_FinalProject/h91gsaqfz688pi40jr2d.jpg",
            "deleted": false,
            "createdAt": new Date("2024-11-23T09:49:29.457Z"),
            "updatedAt": new Date("2024-12-03T03:31:16.391Z"),
            "__v": 0,
            "point": 499605
        },
        {
            "_id": ObjectId("6741a61d4ccb29381f082384"),
            "fullName": "Thong",
            "email": "thanhcongnewzxc456@gmail.com",
            "profile_image": "https://res.cloudinary.com/dervs0fx5/image/upload/v1709054146/cl0hmsqdjl1lwnahek0i.png",
            "deleted": false,
            "createdAt": new Date("2024-11-23T09:53:33.868Z"),
            "updatedAt": new Date("2024-11-23T09:53:33.868Z"),
            "__v": 0,
            "point": 61
        }
    ]
)

// user coupon
db.createCollection('user_coupon');
// db.user_coupon.insertMany([])

// wish list
db.createCollection('wish_list');
db.wish_list.insertMany(
    [
        {
            _id: ObjectId("67470928334ac964f89fa64d"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            createdAt: new Date("2024-11-27T11:57:28.389Z"),
            __v: 0
        },
        {
            _id: ObjectId("67473a05248eccbe7ca632d4"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151aa"),
            createdAt: new Date("2024-11-27T15:25:57.735Z"),
            __v: 0
        },
        {
            _id: ObjectId("6748576fb712ba2871157b22"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a8"),
            createdAt: new Date("2024-11-28T11:43:43.394Z"),
            __v: 0
        },
        {
            _id: ObjectId("674a7f4573a24e758943150c"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151ab"),
            createdAt: new Date("2024-11-30T02:58:13.431Z"),
            __v: 0
        },
        {
            _id: ObjectId("67549401941a18f8c5ae172e"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a9"),
            createdAt: new Date("2024-12-07T18:29:21.024Z"),
            __v: 0
        },
        {
            _id: ObjectId("67569cc7b4a7648736a80dac"),
            user_id: ObjectId("674067eac35c263bdad6c769"),
            product_id: ObjectId("674138636c0973f433b151a9"),
            createdAt: new Date("2024-12-09T07:31:19.486Z"),
            __v: 0
        }
    ]
)
