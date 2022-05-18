export const mockHtml: { dirty: string; clean: string }[] = [
	{
		dirty: '<img src=x onerror=alert(1)//>',
		clean: '<img src="x"/>'
	},
	{
		dirty: '<svg><g/onload=alert(2)//<p>',
		clean: '<svg><g></g></svg>'
	},
	{
		dirty: '<p>abc<iframe//src=jAva&Tab;script:alert(3)>def</p>',
		clean: '<p>abc</p>'
	},
	{
		dirty: '<math><mi//xlink:href="data:x,<script>alert(4)</script>">',
		clean: '<math><mi></mi></math>'
	},
	{
		dirty: '<TABLE><tr><td>HELLO</tr></TABL>',
		clean: '<table><tbody><tr><td>HELLO</td></tr></tbody></table>'
	},
	{
		dirty: '<UL><li><A HREF=//google.com>click</UL>',
		clean: '<ul><li><a href="//google.com">click</a></li></ul>'
	},
	{
		dirty: '<a href="javascript:alert(\'danger\')">A link</a>',
		clean: '<a>A link</a>'
	},
	{
		dirty: '<img onload="alert(1)" />',
		clean: '<img/>'
	}
]
