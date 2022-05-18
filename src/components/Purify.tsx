import React, { useMemo } from 'react'

import DOMPurify from 'isomorphic-dompurify'

export type PurifyProps = {
	dirty: string
	className?: string
}

export const Purify = (props: PurifyProps) => {
	const { dirty, className = '' } = props
	const __html = useMemo(() => DOMPurify.sanitize(dirty), [dirty])

	return <div className={className} dangerouslySetInnerHTML={{ __html }} />
}
