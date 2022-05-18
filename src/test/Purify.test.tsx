import { expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import { Purify } from '../index'
import React from 'react'
import { mockHtml } from './ mocks'

for (const [index, html] of mockHtml.entries()) {
	it('Should purify the dirty prop', () => {
		const { dirty, clean } = html
		const { container } = render(
			<Purify dirty={dirty} className={index.toString()} />
		)

		expect(container.querySelector(`div.${index}`)?.innerHTML).toEqual(clean)
	})
}
