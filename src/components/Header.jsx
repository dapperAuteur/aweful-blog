import React from 'react'
import PropTypes from 'prop-types'

import { DefaultButton } from 'component/Button'
import { classNames } from 'util/commonUtil'

import 'style/header.scss'

/**
 * @description 상단 헤더 부분 구현
 */
const Header = ({ title = '', navList = [] }) => (
  <div className={classNames('HeaderContainer')}>
    {/* Header Title */}
    <DefaultButton to="/" customClass={classNames('HeaderTitle')}>
      {title}
    </DefaultButton>

    <div className={classNames('HeaderNav')}>
      {navList.map(navItem => {
        return (
          <DefaultButton key={navItem.name} to={navItem.path}>
            {navItem.name.toUpperCase()}
          </DefaultButton>
        )
      })}
    </div>
  </div>
)

Header.propTypes = {
  title: PropTypes.string,
  navList: PropTypes.array.isRequired,
}

export default Header
