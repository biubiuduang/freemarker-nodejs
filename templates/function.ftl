<#include "/common/header.ftl">
	<#-- 转换大小写 -->
	<p>${name?upper_case}</p>
	<#-- 获取字符串长度 -->
	<p>${name?length}</p>
	<#-- 获取对象中的key个数,适用于数组 -->
	<p>${name?size}</p>


	<p>-------------------------------------</p>
	<#-- 处理不存在的变量 -->
	<p>${user!"visitor"}</p>
	<#if user??><h1>Welcome ${user}!</h1></#if>
<#include "/common/footer.ftl">
