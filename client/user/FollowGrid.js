class FollowGrid extends Component {
    render() {
      const {classes} = this.props
      return (<div className={classes.root}>
        <GridList cellHeight={160} className={classes.gridList} cols={4}>
          {this.props.people.map((person, i) => {
             return <GridListTile style={{'height':120}} key={i}>
                <Link to={"/user/" + person._id}>
                  <Avatar src={'/api/users/photo/'+person._id} className=
                 {classes.bigAvatar}/>
                  <Typography className={classes.tileText}>{person.name}
                 </Typography>
                </Link>
              </GridListTile>
          })}
        </GridList>
      </div>)
    }
  }
  
  FollowGrid.propTypes = {
    classes: PropTypes.object.isRequired,
    people: PropTypes.array.isRequired
  }