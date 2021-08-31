import Image from 'next/image'

import Check from '../../public/icons/check.png'
import ArrowRight from '../../public/icons/arrow_right.png'
import ArrowDown from '../../public/icons/arrow_down.png'

export default function Icon({iconTitle, alt = ''}) {
  const icons = {
    check: Check,
    arrow_right: ArrowRight,
    arrow_down: ArrowDown,
  } 

  return (
    <Image src={icons[iconTitle]} alt={alt} />
  );
}