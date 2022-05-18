import type { HTMLAttributes } from 'react'
import React from 'react'
import { usePurified } from '..'

export interface PurifiedSpanProps extends HTMLAttributes<HTMLSpanElement> {
	dirty: string
}

export const PurifiedSpan = (props: PurifiedSpanProps) => {
	const { dirty, ...restProps } = props
	const __html = usePurified(dirty)

	return <span dangerouslySetInnerHTML={{ __html }} {...restProps} />
}
