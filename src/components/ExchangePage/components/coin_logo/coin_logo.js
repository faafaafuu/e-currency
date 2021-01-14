import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

import coin_logos from './coins_data'

export default function Icon_cur() {
    return (
      <SvgIcon component={coin_logos[2]} ></SvgIcon>
    );
  }
