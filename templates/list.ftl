<#include "/common/header.ftl">
	<#-- 避免数组为0的时候输出一个空的ul -->
    <#list animals>
	<ul>
		<#items as animal>
			<li>${animal}</li>
		</#items>
	</ul>
	</#list>


	<p>-------------------------------------------</p>
	<#-- 枚举的时候有逗号和没有逗号的语法 -->
	<p>Animals:<#list animals as animal>${animal},</#list></p>
	<p>Animals:<#list animals as animal>${animal}<#sep>,</#list></p>
	<#-- 避免数组为0的时候输出一个空的ul -->
	<p>Animals:
		<#list cats as cat>
			${cat}<#sep>,<#else>None
		</#list>
	</p>


	<p>-------------------------------------------</p>
	<#-- 联合指令的使用 -->
	<#list dogs>
		<#items as dog>
			<p <#if dog.index==1>class="test"</#if> >${dog.index}:${dog.name}</p>
		</#items>
	</#list>

<#include "/common/footer.ftl">
