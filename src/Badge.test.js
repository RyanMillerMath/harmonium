import Badge from './Badge'

describe('Badge', () => {
  it('should render without throwing', () => {
    shallow(<Badge />)
  })

  it('should add className to child', () => {
    const inherentClassName = 'badge'
    const testClassName = '__TEST__'

    const childClassName = shallow(<Badge className={testClassName} />)
      .first()
      .prop('className')

    expect(childClassName).to.contain(inherentClassName)
    expect(childClassName).to.contain(testClassName)
  })

  // it('can render an icon', () => {
  //   const icon = "home"
    
  //   const renderedIcon = shallow(<Badge icon={icon} /> ).first().prop()
  //   expect(renderedIcon.contains).to.equal(icon)
  // })
})
