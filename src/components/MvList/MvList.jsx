import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import { parseLargeNumber } from '../../utils/number'
import PropTypes from 'prop-types'
import './main.styl'
import '../../common/stylus/common/iconfont.styl'

export default class MvList extends Component {
  static defaultProps = {
    list: []
  }

  static propTypes = {
    list: PropTypes.oneOfType([PropTypes.array])
  }

  toPlayVideo(id) {
    Taro.navigateTo({ url: `/pages/play-video/play-video?mvid=${id}` })
  }

  render() {
    return (
      <View className='mv-list-wrapper'>
        {this.props.list.map(item => (
          <View className='mv-item' key={item.id} onClick={this.toPlayVideo.bind(this, item.id)}>
            <View className='img-wrapper'>
              <Image src={item.cover || item.picUrl} mode='widthFix' lazy-load className='img' />
              <View className='count'>
                <Text className='iconfont icon-shipin' />
                {parseLargeNumber(item.playCount)}
              </View>
            </View>
            <Text className='text'>{item.name}</Text>
          </View>
        ))}
      </View>
    )
  }
}
