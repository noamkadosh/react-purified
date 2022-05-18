import { PurifiedDiv, PurifiedSpan } from '..'
import { expect, it } from 'vitest'

import React from 'react'
import { mockHtml } from './ mocks'
import { render } from '@testing-library/react'

it('Should purify the dirty prop in a div', () => {
	for (const [index, html] of mockHtml.entries()) {
		const { dirty, clean } = html
		const { container } = render(
			<PurifiedDiv dirty={dirty} className={index.toString()} />
		)

		expect(container.querySelector(`div.${index}`)?.innerHTML).toEqual(clean)
	}
})

it('Should purify the dirty prop in a span', () => {
	for (const [index, html] of mockHtml.entries()) {
		const { dirty, clean } = html
		const { container } = render(
			<PurifiedSpan dirty={dirty} className={index.toString()} />
		)

		expect(container.querySelector(`span.${index}`)?.innerHTML).toEqual(clean)
	}
})
