export const smoothScroll = (elementId, offset = 0) => {
  const element = document.getElementById(elementId);
  if (element) {
    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
};

export const smoothScrollToRef = (ref, offset = 0) => {
  if (ref && ref.current) {
    const targetPosition = ref.current.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
};

export const getOffsetByBreakpoint = (theme) => {
  const currentBreakpoint = Object.entries(theme.breakpoints.values)
    .reverse()
    .find(([key, value]) => window.innerWidth >= value)?.[0];

  switch (currentBreakpoint) {
    case 'xl':
    case 'lg':
      return 100;
    case 'md':
      return 80;
    case 'sm':
    case 'xs':
      return 64;
    default:
      return 80;
  }
};