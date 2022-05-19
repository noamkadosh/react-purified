import type { HTMLAttributes } from 'react'
import React from 'react'
import { usePurified } from '../hooks'

export interface PurifiedDivProps extends HTMLAttributes<HTMLDivElement> {
	dirty: string
}

export const PurifiedDiv = (props: PurifiedDivProps) => {
	const { dirty, ...restProps } = props
	const __html = usePurified(dirty)

	return <div dangerouslySetInnerHTML={{ __html }} {...restProps} />
}
