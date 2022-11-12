//1.Design database for Zen class programme
//2.Insert to users data collection  
db.users.insertMany([
    {
        'userId': 1,
        'name': 'Devan',
        'email': 'deva@gmail.com',
        'mobile': '8498382938'
    },
    {
        'userId': 2,
        'name': 'Dinesh',
        'email': 'dinesh@gmail.com',
        'mobile': '8458382938'
    },
    {
        'userId': 3,
        'name': 'John',
        'email': 'john@gmail.com',
        'mobile': '8498752938'
    },
    {
        'userId': 4,
        'name': 'Ganesh',
        'email': 'ganesh@gmail.com',
        'mobile': '9498382938'
    },
    {
        'userId': 5,
        'name': 'Ramesh',
        'email': 'ramesh@gmail.com',
        'mobile': '9498382938'
    },
]);

//3.Insert to codekata collection
db.codekata.insertMany([
    {
        'userId': 1,
        'problemsSolved': 120,
        'rank': 3000,
        'geekcoins': 2500
    },
    {
        'userId': 2,
        'problemsSolved': 220,
        'rank': 2000,
        'geekcoins': 4500
    },
    {
        'userId': 3,
        'problemsSolved': 320,
        'rank': 1000,
        'geekcoins': 7500
    },
    {
        'userId': 4,
        'problemsSolved': 520,
        'rank': 400,
        'geekcoins': 11500
    },
    {
        'userId': 5,
        'problemsSolved': 720,
        'rank': 100,
        'geekcoins': 16500
    },
]);

//4.Insert to attendance collection
db.attendance.insertMany([
    {
        'userId': 1,
        'date': new Date("2020-10-15"),
        'status': 'absent'
    },
    {
        'userId': 2,
        'date': new Date("2020-10-15"),
        'status': 'present'
    },
    {
        'userId': 3,
        'date': new Date("2020-10-15"),
        'status': 'absent'
    },
    {
        'userId': 4,
        'date': new Date("2020-10-15"),
        'status': 'present'
    },
    {
        'userId': 5,
        'date': new Date("2020-10-15"),
        'status': 'absent'
    },
]);

//5.Insert to topics collection:
db.topics.insertMany([
    {
        'topic_Id': 1,
        'topic_name': 'Javascript-functions',
        'tasks': ["arrow-functions", "inline-functions", "IIFE"],
        'date': new Date("2020-10-15"),
    },
    {
        'topic_Id': 2,
        'topic_name': 'Javascript-variables',
        'tasks': ["var", "let"],
        'date': new Date("2020-10-15")
    },
    {
        'topic_Id': 3,
        'topic_name': 'Javascript-events',
        'tasks': ["event-bubbling", "event-listners"],
        'date': new Date("2020-10-15"),
    },
    {
        'topic_Id': 4,
        'topic_name': 'mysql-crud',
        'tasks': ["create-table", "update-table","insert"],
        'date': new Date("2020-10-15")
    },
    {
        'topic_Id': 5,
        'topic_name': 'mongo',
        'tasks': ["find", "aggregate"],
        'date': new Date("2020-10-15")
    },
]);

//6.Insert to drives collection
db.drives.insertMany([
    {
        'drive_id': 1,
        'drive_name': 'google',
        'user_ids': [1, 2, 3, 4],
        'date': new Date("2020-10-15")
    },
    {
        'drive_id': 2,
        'drive_name': 'hotstar',
        'user_ids': [3, 4],
        'date': new Date("2020-11-15")
    },
    {
        'drive_id': 3,
        'drive_name': 'microsoft',
        'user_ids': [1, 2, 3, 4],
        'date': new Date("2020-10-25")
    },
    {
        'drive_id': 4,
        'drive_name': 'amazon',
        'user_ids': [1, 2, 3],
        'date': new Date("2020-10-30")
    },
    {
        'drive_id': 5,
        'drive_name': 'redbus',
        'user_ids': [1,2,3,4],
        'date': new Date("2020-09-15")
    },
]);
//7.Insert to mentors collection:
db.mentors.insertMany([
    {
        'mentor_id': 5,
        'mentee_ids': [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13,14,15,16]
    },
    {
        'mentor_id': 6,
        'mentee_ids': [1, 2, 3, 4]
    },
    {
        'mentor_id': 7,
        'mentee_ids': [1,]
    },
    {
        'mentor_id': 8,
        'mentee_ids': [1, 2, 3,]
    },
    {
        'mentor_id': 9,
        'mentee_ids': [1, 2, 3,4,6,7,8]
    },
]);
//8.Insert to tasks collection
db.tasks.insertMany([
    {
        'user_id': 1,
        'task_name': 'TV application design',
        'date': new Date("2020-10-15"),
        'submission_date': new Date("2020-10-21")
    },
    {
        'user_id': 2,
        'task_name': 'TV application design',
        'date': new Date("2020-10-15"),
        'submission_date': new Date("2020-11-15")
    },
    {
        'user_id': 3,
        'task_name': 'TV application design',
        'date': new Date("2020-10-15"),
        'submission_date': new Date("2020-11-15")
    },
    {
        'user_id': 4,
        'task_name': 'TV application design',
        'date': new Date("2020-10-15"),
        'submission_date': new Date("2020-11-15")
    },
    {
        'user_id': 5,
        'task_name': 'TV application design',
        'date': new Date("2020-10-15"),
        'submission_date': new Date("2020-11-15")
    },
]);

