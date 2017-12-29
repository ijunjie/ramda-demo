# ramda-demo

演示ramda中一些重要函数的用法

- [列表](#列表)
- [函数](#函数)



## 列表
<table>
<thead>
<tr>
<th style="text-align:left">Action</th>
<th style="text-align:left">Function</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">列表转换</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#map" target="_blank" rel="external">map</a></td>
</tr>
<tr>
<td style="text-align:left">列表过滤：过滤出符合条件的元素</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#filter" target="_blank" rel="external">filter</a></td>
</tr>
<tr>
<td style="text-align:left">列表过滤：过滤掉符合条件的元素</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#reject" target="_blank" rel="external">reject</a></td>
</tr>
<tr>
<td style="text-align:left">列表折叠：从左向右对所有元素依次归约（折叠）</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#reduce" target="_blank" rel="external">reduce</a></td>
</tr>
<tr>
<td style="text-align:left">列表折叠：从右向左对所有元素依次归约（折叠）</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#reduceRight" target="_blank" rel="external">reduceRight</a></td>
</tr>
<tr>
<td style="text-align:left">列表折叠(增强版)</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#transduce" target="_blank" rel="external">transduce</a></td>
</tr>
<tr>
<td style="text-align:left">列表去重</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#uniq" target="_blank" rel="external">uniq</a></td>
</tr>
<tr>
<td style="text-align:left">列表去重：对处理后的元素做相等性判断</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#uniqBy" target="_blank" rel="external">uniqBy</a></td>
</tr>
<tr>
<td style="text-align:left">列表去重：通过断言函数（predicate）判断</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#uniqWith" target="_blank" rel="external">uniqWith</a></td>
</tr>
<tr>
<td style="text-align:left">列表排序</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#sort" target="_blank" rel="external">sort</a></td>
</tr>
<tr>
<td style="text-align:left">列表翻转</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#reverse" target="_blank" rel="external">reverse</a></td>
</tr>
<tr>
<td style="text-align:left">列表拼接</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#concat" target="_blank" rel="external">concat</a></td>
</tr>
<tr>
<td style="text-align:left">列表长度</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#length" target="_blank" rel="external">length</a></td>
</tr>
<tr>
<td style="text-align:left">列表表头拼接元素</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#prepend" target="_blank" rel="external">prepend</a></td>
</tr>
<tr>
<td style="text-align:left">列表表尾拼接元素</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#append" target="_blank" rel="external">append</a></td>
</tr>
<tr>
<td style="text-align:left">更新指定索引处的值</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#adjust" target="_blank" rel="external">adjust</a></td>
</tr>
<tr>
<td style="text-align:left">替换指定索引处的值</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#update" target="_blank" rel="external">update</a></td>
</tr>
<tr>
<td style="text-align:left">将列表元素转换为其指定的属性值，等价于 R.map(R.prop)</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#pluck" target="_blank" rel="external">pluck</a></td>
</tr>
<tr>
<td style="text-align:left">为列表迭代函数添加两个参数：索引和整个列表</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#addIndex" target="_blank" rel="external">addIndex</a></td>
</tr>
<tr>
<td style="text-align:left">取出特定索引范围内的元素</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#slice" target="_blank" rel="external">slice</a></td>
</tr>
<tr>
<td style="text-align:left">将列表通过分隔符拼接成字符串</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#join" target="_blank" rel="external">join</a></td>
</tr>
<tr>
<td style="text-align:left">取出第 N 个元素</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#nth" target="_blank" rel="external">nth</a></td>
</tr>
<tr>
<td style="text-align:left">取出前 N 个元素</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#take" target="_blank" rel="external">take</a></td>
</tr>
<tr>
<td style="text-align:left">取出后 N 个元素</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#takeLast" target="_blank" rel="external">takeLast</a></td>
</tr>
<tr>
<td style="text-align:left">从前往后取出满足条件的元素，直至不满足条件的首个元素止</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#takeWhile" target="_blank" rel="external">takeWhile</a></td>
</tr>
<tr>
<td style="text-align:left">从后向前取出满足条件的元素，直至不满足条件的首个元素止</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#takeLastWhile" target="_blank" rel="external">takeLastWhile</a></td>
</tr>
<tr>
<td style="text-align:left">删除前 N 个元素</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#drop" target="_blank" rel="external">drop</a></td>
</tr>
<tr>
<td style="text-align:left">删除后 N 个元素</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#dropLast" target="_blank" rel="external">dropLast</a></td>
</tr>
<tr>
<td style="text-align:left">从前往后删除满足条件的元素，直至不满足条件的首个元素止</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#dropWhile" target="_blank" rel="external">dropWhile</a></td>
</tr>
<tr>
<td style="text-align:left">从后向前删除满足条件的元素，直至不满足条件的首个元素止</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#dropLastWhile" target="_blank" rel="external">dropLastWhile</a></td>
</tr>
<tr>
<td style="text-align:left">取出首个元素</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#head" target="_blank" rel="external">head</a></td>
</tr>
<tr>
<td style="text-align:left">取出末尾元素</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#taillast" target="_blank" rel="external">last</a></td>
</tr>
<tr>
<td style="text-align:left">取出前 length - 1 个元素（删除末尾元素）</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#init" target="_blank" rel="external">init</a></td>
</tr>
<tr>
<td style="text-align:left">取出后 length - 1 个元素（删除首个元素）</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#tail" target="_blank" rel="external">tail</a></td>
</tr>
<tr>
<td style="text-align:left">求差集：{a∣a∈xs ∩ a∉ys}</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#difference" target="_blank" rel="external">difference</a></td>
</tr>
<tr>
<td style="text-align:left">求差集：{a∣a∉xs ∩ a∈ys}</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#without" target="_blank" rel="external">without</a></td>
</tr>
<tr>
<td style="text-align:left">求差集：根据条件计算第一个列表与第二个列表的差集</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#differenceWith" target="_blank" rel="external">differenceWith</a></td>
</tr>
<tr>
<td style="text-align:left">求对称差集：{(xs ∪ ys) - (xs ∩ ys)}</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#symmetricDifference" target="_blank" rel="external">symmetricDifference</a></td>
</tr>
<tr>
<td style="text-align:left">求对称差集：根据条件计算所有不属于两个列表交集的元素</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#symmetricDifferenceWith" target="_blank" rel="external">symmetricDifferenceWith</a></td>
</tr>
<tr>
<td style="text-align:left">求交集：{xs ∩ ys}</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#intersection" target="_blank" rel="external">intersection</a></td>
</tr>
<tr>
<td style="text-align:left">求交集：从 xs 中挑选出在 ys 中符合条件的元素</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#innerJoin" target="_blank" rel="external">innerJoin</a></td>
</tr>
<tr>
<td style="text-align:left">求并集：{xs ∪ ys}</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#union" target="_blank" rel="external">union</a></td>
</tr>
<tr>
<td style="text-align:left">求并集：根据条件判断两元素是否重复</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#unionWith" target="_blank" rel="external">unionWith</a></td>
</tr>
<tr>
<td style="text-align:left">查找列表中首个满足条件的元素</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#find" target="_blank" rel="external">find</a></td>
</tr>
<tr>
<td style="text-align:left">查找列表中首个满足条件的元素的索引</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#findIndex" target="_blank" rel="external">findIndex</a></td>
</tr>
<tr>
<td style="text-align:left">查找列表中最后一个满足条件的元素</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#findLast" target="_blank" rel="external">findLast</a></td>
</tr>
<tr>
<td style="text-align:left">查找列表中最后一个满足条件的元素的索引</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#findLastIndex" target="_blank" rel="external">findLastIndex</a></td>
</tr>
<tr>
<td style="text-align:left">查找给定元素在列表中首次出现时的索引</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#indexOf" target="_blank" rel="external">indexOf</a></td>
</tr>
<tr>
<td style="text-align:left">查找给定元素在列表中末次出现时的索引</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#lastIndexOf" target="_blank" rel="external">lastIndexOf</a></td>
</tr>
<tr>
<td style="text-align:left">列表判断：判断元素是否包含在列表中</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#contains" target="_blank" rel="external">contains</a></td>
</tr>
<tr>
<td style="text-align:left">列表判断：判断是否列表中所有元素都满足条件</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#all" target="_blank" rel="external">all</a></td>
</tr>
<tr>
<td style="text-align:left">列表判断：判断是否列表中所有元素都不满足条件</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#none" target="_blank" rel="external">none</a></td>
</tr>
<tr>
<td style="text-align:left">列表判断：判断是否列表中存在满足条件的元素</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#any" target="_blank" rel="external">any</a></td>
</tr>
<tr>
<td style="text-align:left">列表判断：判断列表是否以给定的值开头</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#startsWith" target="_blank" rel="external">startsWith</a></td>
</tr>
<tr>
<td style="text-align:left">列表判断：判断列表是否以给定的值结尾</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#endsWith" target="_blank" rel="external">endsWith</a></td>
</tr>
<tr>
<td style="text-align:left">列表分组：按是否符合条件，将元素分为两组</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#partition" target="_blank" rel="external">partition</a></td>
</tr>
<tr>
<td style="text-align:left">列表分组：对列表中元素按指定规则分组</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#groupBy" target="_blank" rel="external">groupBy</a></td>
</tr>
<tr>
<td style="text-align:left">列表分段：对列表中元素按指定规则分段</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#groupWith" target="_blank" rel="external">groupWith</a></td>
</tr>
<tr>
<td style="text-align:left">列表分组：对列表中元素按指定规则分组折叠</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#reduceBy" target="_blank" rel="external">reduceBy</a></td>
</tr>
<tr>
<td style="text-align:left">列表分割：在指定索引处</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#splitAt" target="_blank" rel="external">splitAt</a></td>
</tr>
<tr>
<td style="text-align:left">列表分割：每隔 N 个元素</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#splitEvery" target="_blank" rel="external">splitEvery</a></td>
</tr>
<tr>
<td style="text-align:left">列表分割：按条件分割</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#splitWhen" target="_blank" rel="external">splitWhen</a></td>
</tr>
<tr>
<td style="text-align:left">对两个列表相同位置的元素进行组合</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#zip" target="_blank" rel="external">zip</a></td>
</tr>
<tr>
<td style="text-align:left">对两个列表相同位置的元素进行键值对组合，fromPairs ∘ zip</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#zipObj" target="_blank" rel="external">zipObj</a></td>
</tr>
<tr>
<td style="text-align:left">对两个列表相同位置的元素按规则进行组合</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#zipWith" target="_blank" rel="external">zipWith</a></td>
</tr>
<tr>
<td style="text-align:left">由一系列键值对列表创建对象</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#fromPairs" target="_blank" rel="external">fromPairs</a></td>
</tr>
<tr>
<td style="text-align:left">列表彻底扁平化</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#flatten" target="_blank" rel="external">flatten</a></td>
</tr>
<tr>
<td style="text-align:left">列表单层扁平化</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#unnest" target="_blank" rel="external">unnest</a></td>
</tr>
<tr>
<td style="text-align:left">先对列表内元素做 Kleisli 映射，再做扁平化，flatMap，&gt;&gt;=</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#chain" target="_blank" rel="external">chain</a></td>
</tr>
<tr>
<td style="text-align:left">函子间的自然变化？</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#sequence" target="_blank" rel="external">sequence</a></td>
</tr>
<tr>
<td style="text-align:left">列表插入</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#insert" target="_blank" rel="external">insert</a></td>
</tr>
<tr>
<td style="text-align:left">将子列表插入列表</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#insertAll" target="_blank" rel="external">insertAll</a></td>
</tr>
<tr>
<td style="text-align:left">在列表元素之间插入分割元素</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#intersperse" target="_blank" rel="external">intersperse</a></td>
</tr>
<tr>
<td style="text-align:left">列表转换 + 折叠？</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#into" target="_blank" rel="external">into</a></td>
</tr>
<tr>
<td style="text-align:left">将 reduce 的迭代过程记录下来</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#mapAccum" target="_blank" rel="external">mapAccum</a></td>
</tr>
<tr>
<td style="text-align:left">将 reduceRight 的迭代过程记录下来</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#mapAccumRight" target="_blank" rel="external">mapAccumRight</a></td>
</tr>
<tr>
<td style="text-align:left">合并多个对象</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#mergeAll" target="_blank" rel="external">mergeAll</a></td>
</tr>
<tr>
<td style="text-align:left">由两个参数组成列表</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#pair" target="_blank" rel="external">pair</a></td>
</tr>
<tr>
<td style="text-align:left">从 reduce 或 transduce 中提前退出迭代时的值</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#reduced" target="_blank" rel="external">reduced</a></td>
</tr>
<tr>
<td style="text-align:left">可以提前退出的 reduce 迭代</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#reduceWhile" target="_blank" rel="external">reduceWhile</a></td>
</tr>
<tr>
<td style="text-align:left">列表生成：生成左闭右开的升序数字列表</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#range" target="_blank" rel="external">range</a></td>
</tr>
<tr>
<td style="text-align:left">列表生成：生成含有 N 个同一元素的列表</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#repeat" target="_blank" rel="external">repeat</a></td>
</tr>
<tr>
<td style="text-align:left">列表生成：函数执行 N 次，生成 N 元列表</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#times" target="_blank" rel="external">times</a></td>
</tr>
<tr>
<td style="text-align:left">列表生成：通过迭代函数生成列表</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#unfold" target="_blank" rel="external">unfold</a></td>
</tr>
<tr>
<td style="text-align:left">二维列表行列式转换</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#transpose" target="_blank" rel="external">transpose</a></td>
</tr>
<tr>
<td style="text-align:left">二维列表生成</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#xprod" target="_blank" rel="external">xprod</a></td>
</tr>
</tbody>
</table>

## 函数

<table>
<thead>
<tr>
<th style="text-align:left">Action</th>
<th style="text-align:left">Function</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">函数组合：纵向，从右往左</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#compose" target="_blank" rel="external">compose</a></td>
</tr>
<tr>
<td style="text-align:left">函数组合：纵向，从左往右</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#pipe" target="_blank" rel="external">pipe</a></td>
</tr>
<tr>
<td style="text-align:left">函数组合：纵向</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#o" target="_blank" rel="external">o</a></td>
</tr>
<tr>
<td style="text-align:left">函数组合：横向</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#converge" target="_blank" rel="external">converge</a></td>
</tr>
<tr>
<td style="text-align:left">函数组合：横向</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#useWith" target="_blank" rel="external">useWith</a></td>
</tr>
<tr>
<td style="text-align:left">Kleisili 函数组合</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#composeK" target="_blank" rel="external">composeK</a></td>
</tr>
<tr>
<td style="text-align:left">Kleisili 函数组合</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#pipeK" target="_blank" rel="external">pipeK</a></td>
</tr>
<tr>
<td style="text-align:left">Promise 函数组合</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#composeP" target="_blank" rel="external">composeP</a></td>
</tr>
<tr>
<td style="text-align:left">Promise 函数组合</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#pipeP" target="_blank" rel="external">pipeP</a></td>
</tr>
<tr>
<td style="text-align:left">单位函数：输出等于输入</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#identity" target="_blank" rel="external">identity</a></td>
</tr>
<tr>
<td style="text-align:left">函数柯里化</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#curry" target="_blank" rel="external">curry</a></td>
</tr>
<tr>
<td style="text-align:left">N 元函数柯里化</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#curryN" target="_blank" rel="external">curryN</a></td>
</tr>
<tr>
<td style="text-align:left">将柯里化函数 转为 N 元函数</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#uncurryN" target="_blank" rel="external">uncurryN</a></td>
</tr>
<tr>
<td style="text-align:left">柯里化函数的参数占位符</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#__" target="_blank" rel="external">__</a></td>
</tr>
<tr>
<td style="text-align:left">参数部分调用：从左往右</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#partial" target="_blank" rel="external">partial</a></td>
</tr>
<tr>
<td style="text-align:left">参数部分调用：从右往左</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#partialRight" target="_blank" rel="external">partialRight</a></td>
</tr>
<tr>
<td style="text-align:left">函数缓存</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#memoize" target="_blank" rel="external">memoize</a></td>
</tr>
<tr>
<td style="text-align:left">函数缓存：可以自定义缓存键值</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#memoizeWith" target="_blank" rel="external">memoizeWith</a></td>
</tr>
<tr>
<td style="text-align:left">只执行一次的函数</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#once" target="_blank" rel="external">once</a></td>
</tr>
<tr>
<td style="text-align:left">创建返回恒定值的函数</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#always" target="_blank" rel="external">always</a></td>
</tr>
<tr>
<td style="text-align:left">恒定返回 <code>true</code> 的函数</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#T" target="_blank" rel="external">T</a></td>
</tr>
<tr>
<td style="text-align:left">恒定返回 <code>false</code>  的函数</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#F" target="_blank" rel="external">F</a></td>
</tr>
<tr>
<td style="text-align:left">Applicative Functor 的 ap 方法，&lt;*&gt;</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#ap" target="_blank" rel="external">ap</a></td>
</tr>
<tr>
<td style="text-align:left">将函数作用于参数列表</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#apply" target="_blank" rel="external">apply</a></td>
</tr>
<tr>
<td style="text-align:left">将接受 <strong>单列表参数</strong> 的函数转为接受 <strong>普通参数列表</strong> 的函数</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#unapply" target="_blank" rel="external">unapply</a></td>
</tr>
<tr>
<td style="text-align:left">将首个参数（函数）作用于其余参数</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#call" target="_blank" rel="external">call</a></td>
</tr>
<tr>
<td style="text-align:left">绑定函数上下文</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#bind" target="_blank" rel="external">bind</a></td>
</tr>
<tr>
<td style="text-align:left">利用属性值为函数的对象生成同构对象</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#applySpec" target="_blank" rel="external">applySpec</a></td>
</tr>
<tr>
<td style="text-align:left">将函数列表作用于参数列表</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#juxt" target="_blank" rel="external">juxt</a></td>
</tr>
<tr>
<td style="text-align:left">将给定值传给给定函数，CPS: flip($)</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#applyTo" target="_blank" rel="external">applyTo</a></td>
</tr>
<tr>
<td style="text-align:left">比较函数，一般用于排序</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#comparator" target="_blank" rel="external">comparator</a></td>
</tr>
<tr>
<td style="text-align:left">升序比较函数</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#ascend" target="_blank" rel="external">ascend</a></td>
</tr>
<tr>
<td style="text-align:left">降序比较函数</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#descend" target="_blank" rel="external">descend</a></td>
</tr>
<tr>
<td style="text-align:left">将函数封装为 N 元函数</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#nArg" target="_blank" rel="external">nArg</a></td>
</tr>
<tr>
<td style="text-align:left">将函数封装为一元函数</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#unary" target="_blank" rel="external">unary</a></td>
</tr>
<tr>
<td style="text-align:left">将函数封装为二元函数</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#binary" target="_blank" rel="external">binary</a></td>
</tr>
<tr>
<td style="text-align:left">提取第 N 个参数</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#nthArg" target="_blank" rel="external">nthArg</a></td>
</tr>
<tr>
<td style="text-align:left">将构造函数封装为普通函数，创建实例时，不需要 new 操作符</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#construct" target="_blank" rel="external">construct</a></td>
</tr>
<tr>
<td style="text-align:left">将构造函数封装为 N 元普通函数，创建实例时，不需要 new 操作符</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#constructN" target="_blank" rel="external">constructN</a></td>
</tr>
<tr>
<td style="text-align:left">通过函数名调用函数</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#invoker" target="_blank" rel="external">invoker</a></td>
</tr>
<tr>
<td style="text-align:left">创建相应类型的空值</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#empty" target="_blank" rel="external">empty</a></td>
</tr>
<tr>
<td style="text-align:left">判断是否为空值</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#isEmpty" target="_blank" rel="external">isEmpty</a></td>
</tr>
<tr>
<td style="text-align:left">交换函数前两个参数的位置</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#flip" target="_blank" rel="external">flip</a></td>
</tr>
<tr>
<td style="text-align:left">函数提升</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#lift" target="_blank" rel="external">lift</a></td>
</tr>
<tr>
<td style="text-align:left">N 元函数提升</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#liftN" target="_blank" rel="external">liftN</a></td>
</tr>
<tr>
<td style="text-align:left">生成单元素列表</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#of" target="_blank" rel="external">of</a></td>
</tr>
<tr>
<td style="text-align:left">输出等于输入，但产生副作用的函数，一般用于调试</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#tap" target="_blank" rel="external">tap</a></td>
</tr>
<tr>
<td style="text-align:left">异常捕获</td>
<td style="text-align:left"><a href="http://ramda.cn/docs/#tryCatch" target="_blank" rel="external">tryCatch</a></td>
</tr>
</tbody>
</table>
