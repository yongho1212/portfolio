import { useMediaQuery } from 'react-responsive'

// 커스텀 훅 생성
export const useResponsive = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' })
  const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1023px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })

  return { isDesktop, isTablet, isMobile }
}
