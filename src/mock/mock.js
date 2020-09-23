import Mock from 'mockjs'
const Random = Mock.Random
//home页面的表格数据
Mock.mock('/getUser',{
    'data|3': [{
        'name': Random.cname(),
        'age': Random.natural(22, 40),
        'date': Random.date('yyyy-MM-dd'),
        'address': Random.county(true)
      }]
})
//登录数据
Mock.mock('/getLogin',
  {
    "error_code": 0,
    "data": [{
      "id": '1',
      "usertitle": "管理员",
      "username": "admin",
      "password": "123456",
      "token": "123133123",
     },
     {
      "id": '2',
      "usertitle": "用户",
      "username": "root",
      "password": "root",
      "token": "65454634",
     }
    ]
  }
)

