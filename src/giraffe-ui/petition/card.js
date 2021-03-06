import React from 'react'
import PropTypes from 'prop-types'

import { formatNumber, percent } from '../../lib'

import { Card } from '../card'
import CaretRightSvg from 'GiraffeUI/svgs/caret-right.svg'

export const PetitionCard = ({
  heading,
  children,
  currentSignatures,
  goalSignatures,
  renderShare,
  renderSignersButton
}) => (
  <Card className='col-12 petition-card' heading={heading}>
    {children}

    <div className='petition-card__range'>
      <div className='petition-card__range__current'>
        {formatNumber(currentSignatures)}
      </div>
      <div className='petition-card__range__max'>
        {formatNumber(goalSignatures)}
      </div>
      <div className='petition-card__range__bar'>
        <div className='petition-card__range__bar__max' />
        <div
          className='petition-card__range__bar__current'
          style={{ width: percent(currentSignatures, goalSignatures) }}
        />
      </div>
    </div>

    {renderSignersButton({
      className: 'mo-btn petition-card__cta',
      CaretRight: CaretRightSvg
    })}
    {renderShare}
  </Card>
)

PetitionCard.propTypes = {
  children: PropTypes.node,
  renderShare: PropTypes.node,
  heading: PropTypes.node,
  currentSignatures: PropTypes.number,
  goalSignatures: PropTypes.number,
  renderSignersButton: PropTypes.func
}

export const Media = ({ imageUrl }) => (
  <div className='petition-card__media'>
    <div className='media'>
      <img src={imageUrl} role='presentation' />
    </div>
  </div>
)
Media.propTypes = { imageUrl: PropTypes.string }
PetitionCard.Media = Media

export const Description = ({ children }) => (
  <div className='petition-card__description'>{children}</div>
)
Description.propTypes = { children: PropTypes.node }
PetitionCard.Description = Description

export default PetitionCard
