import React, { Component } from 'react';
import { connect } from 'dva';

const rankingListData = [];
for (let i = 0; i < 7; i += 1) {
  rankingListData.push({
    title: `工专路 ${i} 号店`,
    total: 323234,
  });
}

@connect(state => ({
  chart: state.chart,
}))
export default class Analysis extends Component {
  state = {}

  componentDidMount() {}

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'chart/clear',
    });
  }

  render() {
    return (
      <div>
      主页Node引入模块一般需要经历3个步骤：路径分析、扩展名分析、编译执行。

Node查找模块的先后顺序：缓存模块 > 核心模块 > 路径形式文件模块 > 自定义文件模块。

缓存模块：Node引入过的模块都会被缓存下来。无论是核心模块还是文件模块，require对相同模块的第二次加载一律采用缓存优先的方式，其中核心模块的缓存检查优先于文件模块的缓存检查。

核心模块：Node提供的模块，已经是编译后二进制文件。

路径形式文件模块:以.、..和./开头的模块。

自定义文件模块:第三方npm包，查找此类模块最耗时且最慢，查找先后顺序：当前目录下node_modules目录、父目录下node_modules目录、向上逐级递归直到根目录下下node_modules目录，因为node_modules文件目录一般都比较深入，所以最耗时最慢。

希望对您有所帮助！

参考资料：深入浅出NodeJSNode引入模块一般需要经历3个步骤：路径分析、扩展名分析、编译执行。

Node查找模块的先后顺序：缓存模块 > 核心模块 > 路径形式文件模块 > 自定义文件模块。

缓存模块：Node引入过的模块都会被缓存下来。无论是核心模块还是文件模块，require对相同模块的第二次加载一律采用缓存优先的方式，其中核心模块的缓存检查优先于文件模块的缓存检查。

核心模块：Node提供的模块，已经是编译后二进制文件。

路径形式文件模块:以.、..和./开头的模块。

自定义文件模块:第三方npm包，查找此类模块最耗时且最慢，查找先后顺序：当前目录下node_modules目录、父目录下node_modules目录、向上逐级递归直到根目录下下node_modules目录，因为node_modules文件目录一般都比较深入，所以最耗时最慢。

希望对您有所帮助！

参考资料：深入浅出NodeJSNode引入模块一般需要经历3个步骤：路径分析、扩展名分析、编译执行。

Node查找模块的先后顺序：缓存模块 > 核心模块 > 路径形式文件模块 > 自定义文件模块。

缓存模块：Node引入过的模块都会被缓存下来。无论是核心模块还是文件模块，require对相同模块的第二次加载一律采用缓存优先的方式，其中核心模块的缓存检查优先于文件模块的缓存检查。

核心模块：Node提供的模块，已经是编译后二进制文件。

路径形式文件模块:以.、..和./开头的模块。

自定义文件模块:第三方npm包，查找此类模块最耗时且最慢，查找先后顺序：当前目录下node_modules目录、父目录下node_modules目录、向上逐级递归直到根目录下下node_modules目录，因为node_modules文件目录一般都比较深入，所以最耗时最慢。

希望对您有所帮助！

参考资料：深入浅出NodeJSNode引入模块一般需要经历3个步骤：路径分析、扩展名分析、编译执行。

Node查找模块的先后顺序：缓存模块 > 核心模块 > 路径形式文件模块 > 自定义文件模块。

缓存模块：Node引入过的模块都会被缓存下来。无论是核心模块还是文件模块，require对相同模块的第二次加载一律采用缓存优先的方式，其中核心模块的缓存检查优先于文件模块的缓存检查。

核心模块：Node提供的模块，已经是编译后二进制文件。

路径形式文件模块:以.、..和./开头的模块。

自定义文件模块:第三方npm包，查找此类模块最耗时且最慢，查找先后顺序：当前目录下node_modules目录、父目录下node_modules目录、向上逐级递归直到根目录下下node_modules目录，因为node_modules文件目录一般都比较深入，所以最耗时最慢。

希望对您有所帮助！

参考资料：深入浅出NodeJSNode引入模块一般需要经历3个步骤：路径分析、扩展名分析、编译执行。

Node查找模块的先后顺序：缓存模块 > 核心模块 > 路径形式文件模块 > 自定义文件模块。

缓存模块：Node引入过的模块都会被缓存下来。无论是核心模块还是文件模块，require对相同模块的第二次加载一律采用缓存优先的方式，其中核心模块的缓存检查优先于文件模块的缓存检查。

核心模块：Node提供的模块，已经是编译后二进制文件。

路径形式文件模块:以.、..和./开头的模块。

自定义文件模块:第三方npm包，查找此类模块最耗时且最慢，查找先后顺序：当前目录下node_modules目录、父目录下node_modules目录、向上逐级递归直到根目录下下node_modules目录，因为node_modules文件目录一般都比较深入，所以最耗时最慢。

希望对您有所帮助！

参考资料：深入浅出NodeJSNode引入模块一般需要经历3个步骤：路径分析、扩展名分析、编译执行。

Node查找模块的先后顺序：缓存模块 > 核心模块 > 路径形式文件模块 > 自定义文件模块。

缓存模块：Node引入过的模块都会被缓存下来。无论是核心模块还是文件模块，require对相同模块的第二次加载一律采用缓存优先的方式，其中核心模块的缓存检查优先于文件模块的缓存检查。

核心模块：Node提供的模块，已经是编译后二进制文件。

路径形式文件模块:以.、..和./开头的模块。

自定义文件模块:第三方npm包，查找此类模块最耗时且最慢，查找先后顺序：当前目录下node_modules目录、父目录下node_modules目录、向上逐级递归直到根目录下下node_modules目录，因为node_modules文件目录一般都比较深入，所以最耗时最慢。

希望对您有所帮助！

参考资料：深入浅出NodeJSNode引入模块一般需要经历3个步骤：路径分析、扩展名分析、编译执行。

Node查找模块的先后顺序：缓存模块 > 核心模块 > 路径形式文件模块 > 自定义文件模块。

缓存模块：Node引入过的模块都会被缓存下来。无论是核心模块还是文件模块，require对相同模块的第二次加载一律采用缓存优先的方式，其中核心模块的缓存检查优先于文件模块的缓存检查。

核心模块：Node提供的模块，已经是编译后二进制文件。

路径形式文件模块:以.、..和./开头的模块。

自定义文件模块:第三方npm包，查找此类模块最耗时且最慢，查找先后顺序：当前目录下node_modules目录、父目录下node_modules目录、向上逐级递归直到根目录下下node_modules目录，因为node_modules文件目录一般都比较深入，所以最耗时最慢。

希望对您有所帮助！

参考资料：深入浅出NodeJSNode引入模块一般需要经历3个步骤：路径分析、扩展名分析、编译执行。

Node查找模块的先后顺序：缓存模块 > 核心模块 > 路径形式文件模块 > 自定义文件模块。

缓存模块：Node引入过的模块都会被缓存下来。无论是核心模块还是文件模块，require对相同模块的第二次加载一律采用缓存优先的方式，其中核心模块的缓存检查优先于文件模块的缓存检查。

核心模块：Node提供的模块，已经是编译后二进制文件。

路径形式文件模块:以.、..和./开头的模块。

自定义文件模块:第三方npm包，查找此类模块最耗时且最慢，查找先后顺序：当前目录下node_modules目录、父目录下node_modules目录、向上逐级递归直到根目录下下node_modules目录，因为node_modules文件目录一般都比较深入，所以最耗时最慢。

希望对您有所帮助！

参考资料：深入浅出NodeJSNode引入模块一般需要经历3个步骤：路径分析、扩展名分析、编译执行。

Node查找模块的先后顺序：缓存模块 > 核心模块 > 路径形式文件模块 > 自定义文件模块。

缓存模块：Node引入过的模块都会被缓存下来。无论是核心模块还是文件模块，require对相同模块的第二次加载一律采用缓存优先的方式，其中核心模块的缓存检查优先于文件模块的缓存检查。

核心模块：Node提供的模块，已经是编译后二进制文件。

路径形式文件模块:以.、..和./开头的模块。

自定义文件模块:第三方npm包，查找此类模块最耗时且最慢，查找先后顺序：当前目录下node_modules目录、父目录下node_modules目录、向上逐级递归直到根目录下下node_modules目录，因为node_modules文件目录一般都比较深入，所以最耗时最慢。

希望对您有所帮助！

参考资料：深入浅出NodeJSNode引入模块一般需要经历3个步骤：路径分析、扩展名分析、编译执行。

Node查找模块的先后顺序：缓存模块 > 核心模块 > 路径形式文件模块 > 自定义文件模块。

缓存模块：Node引入过的模块都会被缓存下来。无论是核心模块还是文件模块，require对相同模块的第二次加载一律采用缓存优先的方式，其中核心模块的缓存检查优先于文件模块的缓存检查。

核心模块：Node提供的模块，已经是编译后二进制文件。

路径形式文件模块:以.、..和./开头的模块。

自定义文件模块:第三方npm包，查找此类模块最耗时且最慢，查找先后顺序：当前目录下node_modules目录、父目录下node_modules目录、向上逐级递归直到根目录下下node_modules目录，因为node_modules文件目录一般都比较深入，所以最耗时最慢。

希望对您有所帮助！

参考资料：深入浅出NodeJSNode引入模块一般需要经历3个步骤：路径分析、扩展名分析、编译执行。

Node查找模块的先后顺序：缓存模块 > 核心模块 > 路径形式文件模块 > 自定义文件模块。

缓存模块：Node引入过的模块都会被缓存下来。无论是核心模块还是文件模块，require对相同模块的第二次加载一律采用缓存优先的方式，其中核心模块的缓存检查优先于文件模块的缓存检查。

核心模块：Node提供的模块，已经是编译后二进制文件。

路径形式文件模块:以.、..和./开头的模块。

自定义文件模块:第三方npm包，查找此类模块最耗时且最慢，查找先后顺序：当前目录下node_modules目录、父目录下node_modules目录、向上逐级递归直到根目录下下node_modules目录，因为node_modules文件目录一般都比较深入，所以最耗时最慢。

希望对您有所帮助！

参考资料：深入浅出NodeJSNode引入模块一般需要经历3个步骤：路径分析、扩展名分析、编译执行。

Node查找模块的先后顺序：缓存模块 > 核心模块 > 路径形式文件模块 > 自定义文件模块。

缓存模块：Node引入过的模块都会被缓存下来。无论是核心模块还是文件模块，require对相同模块的第二次加载一律采用缓存优先的方式，其中核心模块的缓存检查优先于文件模块的缓存检查。

核心模块：Node提供的模块，已经是编译后二进制文件。

路径形式文件模块:以.、..和./开头的模块。

自定义文件模块:第三方npm包，查找此类模块最耗时且最慢，查找先后顺序：当前目录下node_modules目录、父目录下node_modules目录、向上逐级递归直到根目录下下node_modules目录，因为node_modules文件目录一般都比较深入，所以最耗时最慢。

希望对您有所帮助！

参考资料：深入浅出NodeJSNode引入模块一般需要经历3个步骤：路径分析、扩展名分析、编译执行。

Node查找模块的先后顺序：缓存模块 > 核心模块 > 路径形式文件模块 > 自定义文件模块。

缓存模块：Node引入过的模块都会被缓存下来。无论是核心模块还是文件模块，require对相同模块的第二次加载一律采用缓存优先的方式，其中核心模块的缓存检查优先于文件模块的缓存检查。

核心模块：Node提供的模块，已经是编译后二进制文件。

路径形式文件模块:以.、..和./开头的模块。

自定义文件模块:第三方npm包，查找此类模块最耗时且最慢，查找先后顺序：当前目录下node_modules目录、父目录下node_modules目录、向上逐级递归直到根目录下下node_modules目录，因为node_modules文件目录一般都比较深入，所以最耗时最慢。

希望对您有所帮助！

参考资料：深入浅出NodeJSNode引入模块一般需要经历3个步骤：路径分析、扩展名分析、编译执行。

Node查找模块的先后顺序：缓存模块 > 核心模块 > 路径形式文件模块 > 自定义文件模块。

缓存模块：Node引入过的模块都会被缓存下来。无论是核心模块还是文件模块，require对相同模块的第二次加载一律采用缓存优先的方式，其中核心模块的缓存检查优先于文件模块的缓存检查。

核心模块：Node提供的模块，已经是编译后二进制文件。

路径形式文件模块:以.、..和./开头的模块。

自定义文件模块:第三方npm包，查找此类模块最耗时且最慢，查找先后顺序：当前目录下node_modules目录、父目录下node_modules目录、向上逐级递归直到根目录下下node_modules目录，因为node_modules文件目录一般都比较深入，所以最耗时最慢。

希望对您有所帮助！

参考资料：深入浅出NodeJSNode引入模块一般需要经历3个步骤：路径分析、扩展名分析、编译执行。

Node查找模块的先后顺序：缓存模块 > 核心模块 > 路径形式文件模块 > 自定义文件模块。

缓存模块：Node引入过的模块都会被缓存下来。无论是核心模块还是文件模块，require对相同模块的第二次加载一律采用缓存优先的方式，其中核心模块的缓存检查优先于文件模块的缓存检查。

核心模块：Node提供的模块，已经是编译后二进制文件。

路径形式文件模块:以.、..和./开头的模块。

自定义文件模块:第三方npm包，查找此类模块最耗时且最慢，查找先后顺序：当前目录下node_modules目录、父目录下node_modules目录、向上逐级递归直到根目录下下node_modules目录，因为node_modules文件目录一般都比较深入，所以最耗时最慢。

希望对您有所帮助！

参考资料：深入浅出NodeJSNode引入模块一般需要经历3个步骤：路径分析、扩展名分析、编译执行。

Node查找模块的先后顺序：缓存模块 > 核心模块 > 路径形式文件模块 > 自定义文件模块。

缓存模块：Node引入过的模块都会被缓存下来。无论是核心模块还是文件模块，require对相同模块的第二次加载一律采用缓存优先的方式，其中核心模块的缓存检查优先于文件模块的缓存检查。

核心模块：Node提供的模块，已经是编译后二进制文件。

路径形式文件模块:以.、..和./开头的模块。

自定义文件模块:第三方npm包，查找此类模块最耗时且最慢，查找先后顺序：当前目录下node_modules目录、父目录下node_modules目录、向上逐级递归直到根目录下下node_modules目录，因为node_modules文件目录一般都比较深入，所以最耗时最慢。

希望对您有所帮助！

参考资料：深入浅出NodeJSNode引入模块一般需要经历3个步骤：路径分析、扩展名分析、编译执行。

Node查找模块的先后顺序：缓存模块 > 核心模块 > 路径形式文件模块 > 自定义文件模块。

缓存模块：Node引入过的模块都会被缓存下来。无论是核心模块还是文件模块，require对相同模块的第二次加载一律采用缓存优先的方式，其中核心模块的缓存检查优先于文件模块的缓存检查。

核心模块：Node提供的模块，已经是编译后二进制文件。

路径形式文件模块:以.、..和./开头的模块。

自定义文件模块:第三方npm包，查找此类模块最耗时且最慢，查找先后顺序：当前目录下node_modules目录、父目录下node_modules目录、向上逐级递归直到根目录下下node_modules目录，因为node_modules文件目录一般都比较深入，所以最耗时最慢。

希望对您有所帮助！

参考资料：深入浅出NodeJSNode引入模块一般需要经历3个步骤：路径分析、扩展名分析、编译执行。

Node查找模块的先后顺序：缓存模块 > 核心模块 > 路径形式文件模块 > 自定义文件模块。

缓存模块：Node引入过的模块都会被缓存下来。无论是核心模块还是文件模块，require对相同模块的第二次加载一律采用缓存优先的方式，其中核心模块的缓存检查优先于文件模块的缓存检查。

核心模块：Node提供的模块，已经是编译后二进制文件。

路径形式文件模块:以.、..和./开头的模块。

自定义文件模块:第三方npm包，查找此类模块最耗时且最慢，查找先后顺序：当前目录下node_modules目录、父目录下node_modules目录、向上逐级递归直到根目录下下node_modules目录，因为node_modules文件目录一般都比较深入，所以最耗时最慢。

希望对您有所帮助！

参考资料：深入浅出NodeJSNode引入模块一般需要经历3个步骤：路径分析、扩展名分析、编译执行。

Node查找模块的先后顺序：缓存模块 > 核心模块 > 路径形式文件模块 > 自定义文件模块。

缓存模块：Node引入过的模块都会被缓存下来。无论是核心模块还是文件模块，require对相同模块的第二次加载一律采用缓存优先的方式，其中核心模块的缓存检查优先于文件模块的缓存检查。

核心模块：Node提供的模块，已经是编译后二进制文件。

路径形式文件模块:以.、..和./开头的模块。

自定义文件模块:第三方npm包，查找此类模块最耗时且最慢，查找先后顺序：当前目录下node_modules目录、父目录下node_modules目录、向上逐级递归直到根目录下下node_modules目录，因为node_modules文件目录一般都比较深入，所以最耗时最慢。

希望对您有所帮助！

参考资料：深入浅出NodeJSNode引入模块一般需要经历3个步骤：路径分析、扩展名分析、编译执行。

Node查找模块的先后顺序：缓存模块 > 核心模块 > 路径形式文件模块 > 自定义文件模块。

缓存模块：Node引入过的模块都会被缓存下来。无论是核心模块还是文件模块，require对相同模块的第二次加载一律采用缓存优先的方式，其中核心模块的缓存检查优先于文件模块的缓存检查。

核心模块：Node提供的模块，已经是编译后二进制文件。

路径形式文件模块:以.、..和./开头的模块。

自定义文件模块:第三方npm包，查找此类模块最耗时且最慢，查找先后顺序：当前目录下node_modules目录、父目录下node_modules目录、向上逐级递归直到根目录下下node_modules目录，因为node_modules文件目录一般都比较深入，所以最耗时最慢。

希望对您有所帮助！

参考资料：深入浅出NodeJSNode引入模块一般需要经历3个步骤：路径分析、扩展名分析、编译执行。

Node查找模块的先后顺序：缓存模块 > 核心模块 > 路径形式文件模块 > 自定义文件模块。

缓存模块：Node引入过的模块都会被缓存下来。无论是核心模块还是文件模块，require对相同模块的第二次加载一律采用缓存优先的方式，其中核心模块的缓存检查优先于文件模块的缓存检查。

核心模块：Node提供的模块，已经是编译后二进制文件。

路径形式文件模块:以.、..和./开头的模块。

自定义文件模块:第三方npm包，查找此类模块最耗时且最慢，查找先后顺序：当前目录下node_modules目录、父目录下node_modules目录、向上逐级递归直到根目录下下node_modules目录，因为node_modules文件目录一般都比较深入，所以最耗时最慢。

希望对您有所帮助！

参考资料：深入浅出NodeJSNode引入模块一般需要经历3个步骤：路径分析、扩展名分析、编译执行。

Node查找模块的先后顺序：缓存模块 > 核心模块 > 路径形式文件模块 > 自定义文件模块。

缓存模块：Node引入过的模块都会被缓存下来。无论是核心模块还是文件模块，require对相同模块的第二次加载一律采用缓存优先的方式，其中核心模块的缓存检查优先于文件模块的缓存检查。

核心模块：Node提供的模块，已经是编译后二进制文件。

路径形式文件模块:以.、..和./开头的模块。

自定义文件模块:第三方npm包，查找此类模块最耗时且最慢，查找先后顺序：当前目录下node_modules目录、父目录下node_modules目录、向上逐级递归直到根目录下下node_modules目录，因为node_modules文件目录一般都比较深入，所以最耗时最慢。

希望对您有所帮助！

参考资料：深入浅出NodeJSNode引入模块一般需要经历3个步骤：路径分析、扩展名分析、编译执行。

Node查找模块的先后顺序：缓存模块 > 核心模块 > 路径形式文件模块 > 自定义文件模块。

缓存模块：Node引入过的模块都会被缓存下来。无论是核心模块还是文件模块，require对相同模块的第二次加载一律采用缓存优先的方式，其中核心模块的缓存检查优先于文件模块的缓存检查。

核心模块：Node提供的模块，已经是编译后二进制文件。

路径形式文件模块:以.、..和./开头的模块。

自定义文件模块:第三方npm包，查找此类模块最耗时且最慢，查找先后顺序：当前目录下node_modules目录、父目录下node_modules目录、向上逐级递归直到根目录下下node_modules目录，因为node_modules文件目录一般都比较深入，所以最耗时最慢。

希望对您有所帮助！

参考资料：深入浅出NodeJSNode引入模块一般需要经历3个步骤：路径分析、扩展名分析、编译执行。

Node查找模块的先后顺序：缓存模块 > 核心模块 > 路径形式文件模块 > 自定义文件模块。

缓存模块：Node引入过的模块都会被缓存下来。无论是核心模块还是文件模块，require对相同模块的第二次加载一律采用缓存优先的方式，其中核心模块的缓存检查优先于文件模块的缓存检查。

核心模块：Node提供的模块，已经是编译后二进制文件。

路径形式文件模块:以.、..和./开头的模块。

自定义文件模块:第三方npm包，查找此类模块最耗时且最慢，查找先后顺序：当前目录下node_modules目录、父目录下node_modules目录、向上逐级递归直到根目录下下node_modules目录，因为node_modules文件目录一般都比较深入，所以最耗时最慢。

希望对您有所帮助！

参考资料：深入浅出NodeJSNode引入模块一般需要经历3个步骤：路径分析、扩展名分析、编译执行。

Node查找模块的先后顺序：缓存模块 > 核心模块 > 路径形式文件模块 > 自定义文件模块。

缓存模块：Node引入过的模块都会被缓存下来。无论是核心模块还是文件模块，require对相同模块的第二次加载一律采用缓存优先的方式，其中核心模块的缓存检查优先于文件模块的缓存检查。

核心模块：Node提供的模块，已经是编译后二进制文件。

路径形式文件模块:以.、..和./开头的模块。

自定义文件模块:第三方npm包，查找此类模块最耗时且最慢，查找先后顺序：当前目录下node_modules目录、父目录下node_modules目录、向上逐级递归直到根目录下下node_modules目录，因为node_modules文件目录一般都比较深入，所以最耗时最慢。

希望对您有所帮助！

参考资料：深入浅出NodeJSNode引入模块一般需要经历3个步骤：路径分析、扩展名分析、编译执行。

Node查找模块的先后顺序：缓存模块 > 核心模块 > 路径形式文件模块 > 自定义文件模块。

缓存模块：Node引入过的模块都会被缓存下来。无论是核心模块还是文件模块，require对相同模块的第二次加载一律采用缓存优先的方式，其中核心模块的缓存检查优先于文件模块的缓存检查。

核心模块：Node提供的模块，已经是编译后二进制文件。

路径形式文件模块:以.、..和./开头的模块。

自定义文件模块:第三方npm包，查找此类模块最耗时且最慢，查找先后顺序：当前目录下node_modules目录、父目录下node_modules目录、向上逐级递归直到根目录下下node_modules目录，因为node_modules文件目录一般都比较深入，所以最耗时最慢。

希望对您有所帮助！

参考资料：深入浅出NodeJSNode引入模块一般需要经历3个步骤：路径分析、扩展名分析、编译执行。

Node查找模块的先后顺序：缓存模块 > 核心模块 > 路径形式文件模块 > 自定义文件模块。

缓存模块：Node引入过的模块都会被缓存下来。无论是核心模块还是文件模块，require对相同模块的第二次加载一律采用缓存优先的方式，其中核心模块的缓存检查优先于文件模块的缓存检查。

核心模块：Node提供的模块，已经是编译后二进制文件。

路径形式文件模块:以.、..和./开头的模块。

自定义文件模块:第三方npm包，查找此类模块最耗时且最慢，查找先后顺序：当前目录下node_modules目录、父目录下node_modules目录、向上逐级递归直到根目录下下node_modules目录，因为node_modules文件目录一般都比较深入，所以最耗时最慢。

希望对您有所帮助！

参考资料：深入浅出NodeJS
      </div>
    );
  }
}
