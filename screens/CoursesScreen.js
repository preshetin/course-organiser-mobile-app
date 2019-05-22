import React from 'react'
import { API } from 'aws-amplify'
import { ScrollView, RefreshControl, StyleSheet } from 'react-native'
import CoursesListView from '../components/CoursesListView'

export default class CoursesScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      refreshing: false,
      courses: null
    }
  }

  static navigationOptions = {
    title: 'Courses'
  };

  _onRefresh = async () => {
    this.setState({ refreshing: true })
    const courses = await this.fetchCourses()
    this.setState({
      courses,
      refreshing: false
    })
  }

  async componentDidMount () {
    const courses = await this.fetchCourses()
    console.log('courses from api', courses)
  }

  fetchCourses = async () => {
    console.log('calling api')
    const response = await API.get('courses', '/courses')
    this.setState({ courses: response })
    return response
  //  alert(JSON.stringify(response, null, 2));
  }

  render () {
    const { courses } = this.state

    let formattedCourses = null
    if (Array.isArray(courses)) {
      formattedCourses = courses.map(course => ({
        ...course,
        id: course.courseId
      }))
    }

    return (
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
          />
        }
        style={styles.container}
      >
        <CoursesListView
          data={formattedCourses}
        />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  }
})
