import clsx from 'clsx'

import Card from '../../components/card/Card'
import Accordion from '../../components/accordion/Accordion'

import style from './usefulLinks.module.scss'

export default function UsefulLinks({image, title, description, link, linkArray=[]}) {
  console.log('linkArray', linkArray);

	return (
		<div className={clsx(['section', style.usefulLinks])}>
      <div className='label'> Useful links </div>
      <div className={clsx(['flex', style.row])}>
        <Card image={image} title={title} description={description} link={link} />
        <div className={style.container}>
          {linkArray && linkArray.map((item, key) => (
            <div key={key} className={style.wrapper}>
              <div className={style.title}>
                {item.title}
              </div>
              <div className={style.links}>
                {item.link && item.link.map((link, linkKey) => (
                  typeof link.link === 'string' ? (                  
                    <div className={style.link} key={linkKey}>
                      {link.title}
                    </div>
                  ) : (
                    <div className={style.link} key={linkKey}>
                      <Accordion title={link.title} items={link.link} />
                    </div>
                  )
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
		</div>
	)
}
