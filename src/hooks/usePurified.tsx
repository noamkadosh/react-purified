import DOMPurify from 'isomorphic-dompurify'
import { useMemo } from 'react'

export const usePurified = (dirty: string) =>
	useMemo(() => DOMPurify.sanitize(dirty), [dirty])
