import React from 'react'
import { API } from 'aws-amplify'
import { Text, ScrollView, StyleSheet } from 'react-native'
import ApplicationsListView from '../components/ApplicationsListView'

export default class ApplicationsScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      // applications: null,
      applications: [
        {
          courseId: 'someCourseId',
          applicationId: 'applicationID-1',
          firstName: 'Ivan',
          lastName: 'Ivanov',
          applicationStatus: 'new'
        },
        {
          courseId: 'someCourseId',
          applicationId: 'applicationID-2',
          firstName: 'Anna',
          lastName: 'Annovna',
          applicationStatus: 'new'
        }
      ]
    }
  }

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title')
  })

  //  async componentDidMount () {
  //    const applications = await this.list()
  //    console.log('applications from api', applications)
  //  }
  //
  //  list = async () => {
  //    console.log('calling api')
  //    const response = await API.get('applications', '/applications')
  //    this.setState({ applications: response })
  //    return response
  //  //  alert(JSON.stringify(response, null, 2));
  //  }

  render () {
    const { applications } = this.state

    let formattedApplications = null
    if (Array.isArray(applications)) {
      formattedApplications = applications.map(application => ({
        ...application,
        id: application.applicationId
      }))
    }

    return (
      <ScrollView style={styles.container}>
        <ApplicationsListView
          data={formattedApplications}
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
