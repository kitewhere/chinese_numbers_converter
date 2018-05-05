# chinese_numbers_converter
阿拉伯数字转换中文数字

## 练习题目
数字转中文 思路如下


### 1. 数字对应到矩阵坐标

数字拆成数组后,从右到左,4位一行对应到矩阵

> 12345678
>
> 9 8 7 6
  5 4 3 2
  1 - - -

得到 `[{num, [row,col]}, ...]`


### 2. 根据字典翻译数字到中文块

中文块由两部分组成: 中文数字和权位
`num`对应`中文数字`部分 
`[row,col]`对应`权位`或`节权位`部分 

* `col==0`对应`节权位` 
* 其他对应`权位`
* [0,0]为特殊没有节权位 (_ps 其实其节权位为`个`_)
* 非节权位如果为0 则只对应节权位的中文
* 权位如果为0 则对应‘’

```javascript
const quots = ['万', '亿', '兆', '京', '垓', '秭', '穰', '沟', '涧', '正', '载', '极', '恒河沙', '阿僧祗', '那由他', '不可思议', '无量', '大数'];
const digits = ['零','一','二','三','四','五','六','七','八','九'];
const units = ['十','百','千'];
```

得到 `[{num, }, ...]`


### 3. 组装最终中文字符串

将各个`part`组装成完整的字符串

* 十百千都为`0` 则丢弃`part`
* 连续出现`0` 则只保留一个`零`


## TODOS
- [x] 基本功能
- [x] 开头的`一十`
- [x] 单个0
- [x] 参数检测
- [x] 负数
- [x] 小数
- [ ] 票据金额格式
- [ ] 中文转阿拉伯数字
- [ ] 简化逻辑 性能优化
