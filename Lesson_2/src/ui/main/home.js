import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Modal, Image, TouchableHighlight, View, Button, Text, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Card from '../components/CardView';
import Header from '../components/header';
import Dialog from '../components/createPostDialog';

import { strings } from '../../i18n';
import LanguageContext from '../hooks/languageHook';
import { setLocal } from '../../i18n'

export default function ({ navigation }) {

    const [isModalVisible, setModalVisibility] = useState(false)
    const [hideDialog, setDialogVisiblity] = useState(true)
    const [items, setItem] = useState([
        {
            id: '1',
            title: 'Title1',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis accumsan nunc, ut pulvinar lacus. Aenean iaculis purus quis ante pellentesque egestas. Praesent eget mauris mauris. Curabitur pulvinar magna eget elit pellentesque scelerisque. Praesent ullamcorper eros sem, vitae dignissim ante efficitur eget. Nullam pulvinar arcu sapien, eget vehicula ex placerat et. Pellentesque accumsan scelerisque lorem, quis rhoncus ex consequat ut. Donec ante mauris, hendrerit nec commodo et, ultrices id dui. Cras lacinia sapien nec euismod auctor. Donec lobortis est sed egestas molestie. Duis ac suscipit ex. Integer enim sem, luctus vel quam eu, mattis auctor libero Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis accumsan nunc, ut pulvinar lacus. Aenean iaculis purus quis ante pellentesque egestas. Praesent eget mauris mauris. Curabitur pulvinar magna eget elit pellentesque scelerisque. Praesent ullamcorper eros sem, vitae dignissim ante efficitur eget. Nullam pulvinar arcu sapien, eget vehicula ex placerat et. Pellentesque accumsan scelerisque lorem, quis rhoncus ex consequat ut. Donec ante mauris, hendrerit nec commodo et, ultrices id dui. Cras lacinia sapien nec euismod auctor. Donec lobortis est sed egestas molestie. Duis ac suscipit ex. Integer enim sem, luctus vel quam eu, mattis auctor',
            image: 'https://image.shutterstock.com/image-photo/islamabad-pakistan-april-25-2019-260nw-1407461093.jpg'
        },
        {
            id: '2',
            title: 'Title2',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
            image: 'data:image/jpeg;base64,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'
        },
        {
            id: '3',
            title: 'Title3',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
            image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSExMVFRUVFRUVFRUVFRUVFhUVFRUWFxUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFxAQFy0dHR0tNy0rLS0tLSstLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS0tLS0tLf/AABEIAOkA2AMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAAECBAUGB//EAD4QAAEDAQQHBwIEBQIHAAAAAAEAAhEDBBIhMQVBUWFxgZEGEyKhscHwMtFCUnKCFCNi4fEHkhUzNGOywtL/xAAYAQADAQEAAAAAAAAAAAAAAAAAAQIDBP/EAB8RAQEBAQEBAQEAAwEAAAAAAAABEQISITEDBBQiE//aAAwDAQACEQMRAD8A8rTQi92l3a7Mc2g3UxarHdJGkjyNVrqV1WRST9yjyPSoWpwxWTRUhRS8j0pupprivmhgg9wZ3e6V5OdAd0ifw2Cv2ezytGyWCTd25KbFaxKdkkJ3WRdhQ0NhMIlHs292TT0R8OuIdZlXfSXcW3QLm5tIWNaNHxqVTnUXvHNuYhwtO0WeFTcxTeTnUoEJ4RLqV1LFaZSCUJwFQOFIJlIBNJwnCYJwmCTpk6YX2UkcWU7FZs9NXaYWuMbVNlgwlBfZFusbIUv4OU/iPrnDZlJtnXQu0coN0enkK2sRtlUzZVrOssK1RsifmJ2udfRhAfRB2+hXR2uxxis40MVPXAneUCyWbFdNo6xTGGIVHR7YK7HQFGXNgNGIxc29hwBCw6ljqmV0GhNDMaw1Kg8MXo264C5nTum67nFtI9ywZNp+ExvfmT8heqVmsFGHhsXRhmAc8J3rzPStFl4wVn/L/q/Wn9Zk+MGnpyuw/wAx3fM1sq+KRuf9TTv8itHSmjaNWk2vQBuPnA5scPqY7ePssy1WYLd7FMvUrVSOIDWVANjpLSeYjounrmSeo5PVt8151pSxQTAWFVorv9LUhJEa1y9qs+JTvG/YJ15jENNR7paJoJfw6jwv/wBIzCxNdV6pQVcsU+cXOtChPCndSuoGoJKRCUIPTBJPCZB66mlSwR6dJKg1XadKVrrKw1Fiu2VmKlQpYQrVCjBS05ysWegNYVwWFpGSjSbAVqjUUa08supo0SmoWEzELbaAVYo2cTKr3UXhz9o0csq0aOjUu3r2cZrHtdHOPdXz1rLvhz1npwun0NUuQdepYjWEEkjgJnzPpgjWa1SZxgbjq2DNHXOlLj0PSBdVsstJluLozunM74wPCV55a6lRziyA27H8zA3pnBjZwIjG9uznDotF9oCz6SDBgjWNxGYw9VUtxs9R5Pjpk+KWNvsxJwu4QRGrURvWXHPm/fxt316kc0/DDHicSun7P2c2ey1KrsHV4DR/22z4uZJ6BCp2ey0/GS6qcwHAMb+5uJPCVm6c0y6scSQNgyjZuHBbZepkjn2cXb+sbSUF5IAnbr6rOq0zmRPDPor0SZRu7AEnAfI5ytfORjLeqwhZCfHEA4gQQQD+YHX6KJs0LffSMwfCJifDDhEy3GQeI1HPAoVazgkAT9JJMGMC0DxZaz0Uyxd4tc7XorOq010lpsmxZVos+KXXOnx1Z8ZdxNdVw0lA0ll5b+lQtSuKwWJBiMOVXLUlYcxJGG6m6tGyhVXMxV6hTgKbVyDtCPTQ6bIR6TFOqXmCQnY2EWjTwU+6xUynT0jCt0aiA6lgoMfCpLVcJCoVrLMqzSrJ3vABJMACSTkAMyU5Ss1zNts0OMDPqqbJbhIPL1VPtRp5zgbktpgiT+J0mBwBOQ19Yy7BpsEFhIOE5YyNXFP/AGZPman/AFeuvu46I1DnrQDXxJxkYZnAwDllkQtGpZy5jS0xeAJJE4YSANRIJx1bCsuzWd10uP4nPPK8Q3ndDV1c5a4uvUgVe0OOAMDWdfBUrQ8ktZJk+InY1pHuWjmVbqWZ3Afpx+ckGy0blQ1KjrzXXWhpbdugBxxM44mcgq7s5ms/5zrvqTUqDT+Unhd+8omjrtSoSJDaZiC0tvVAB4iCBIAiN8nUFn6Z08HkwYjAXRF0DXOoLQ0ZayYbUIn82QO52w+vSeXn/Indy/Hbf8W/zm8/Wu2k0CANvnmhWloOB9YRrNUa76TI2gG7ydkeUoj6QmYx2qrYU5rLfYQBt3nMnaVmV7Iume3BU3WWUTsXjXJWiyQVUfSK6q1WI7FlVrInspecYzqSgaa0KlGFBtCUDFIsSWgLOnS1U1sEq7Z3qg9FouhZX8bte8FJlbFZFS0zgrFkdKnyNdLZamCtNcsqzVVea+VKlkulCDMUSkighOUsCaYK5ntfpwN/lA4CC/OS7MM3jIniFvaa0g2z0zUOJya38zjkOC8q0nXBdfcbzjedzM4xlnJn+nep76+Yvjn7odqthJN/oMmarx2uiW7lk2Ose9JGAg/PZPbXwN+viRh09gq9lMO/aVljXXulGxXmtvF0XWwAS0DD+nE8yVD/AIfSoUwymzwibrAcZJJOLjrOsnWtCyVAWMO1rT1AKavTmF2zpw3j4yrPS70kNAutMOcCHAnA3G8iJJyyE5jG7X2Xu6Jdsc3brMZc12FGndEDALlO3z3CyuJES9gi9I+qZMiRlqKXfd82Dj+cnUry6w2iKhvHMmNk6uWrgVu2S3RIIlhwLTjdGV0zm0Zc1yxOM71o2errzyBG0H/PmVx47pXqWibYKjN7Y6air1xef6A0n3LmvxLcQ4btceRjgvRqEOaHNMtcAQRrBXRx3s+ubvjL8N3YhKnZ0a4pMKLRIBVsohZVosQW9VyVKo1KdU8cxabBjko0rDC6E0Ez7Mq9l4jCqWOElqvpJkvR+WAnBKtCzo1Kyp+ixSbSlaNlpwjNsys06KV605yezq/TKBToq2yio0xqT1MuQ2sWZ2ntvcWd7gQHOFxmOMuzI2wJPJAxx/azTfe1JaZY3wUoycfxO5n0C52sY8OvN53bOGAw3J7K4PqFxHgpjLyk9R1KC8EtLsZqOgcPkqK2n4oVjJA58ynbgQmdi4lOUYT2LsXpDvbMyTJYAw8sBO/BdAHLy/8A040sKdU0XGBUi7svj75L00Lfn8YdfopcvPv9U7dApUQdr3dIHqu/DcQJida8T7X211W11iSTdqOYODDdERhqS7vzD4n1iXcEay4wOI+yjCVnGYHEcsfZYtmm1+F8ZjB339eq7jsHpXA2dxEHx0pzIzewcM+ZXEUHAPBP01G48fgnoiaMtjrPWGp1N4LeAMFs7xI6JwWbHspGCCH4p2WhrmhzSC1wDmkYggiQqVWrBVs8XXvQIlDbWRabwUjhg1OWqTqgQ31cFKlWuko1npKgCymjsop2sRmBToxOnRCsMswUKat0lNp4kyiEVtNMnLktPEXQvLO22mBVruAxZRljN7/xO/3Yft3ruu0+lO4s73g+Mwyn+t2APLE/tXkLnS7c3Enar5iUqhht0ZucA7dtHr0RrSQDTaPwsk8cY9UGm0+EnMkvPmEnnG9tYeQAEBA1n6ynSIgpApkPZKpY8PaYc0gg7CMl7V2c0j/EWenVMXiPEB+YZrw8FeidgNId211N+ADvhV8p6jstM24UaL6h/CMOOpeE1HlziTiSSTxJkr1Tttpqn/DuYDJJA9V5Sl3fo5/Emp7IfEogqVAeKd4UKXM6OGbXHyGHopPqyQ87BeG44H26qNDL9RPleUcg06iCw8o/smbt+xGlZa6zn8PiZvaT4hyJB/cty0PXmmi7Y6i9rxmw472n6hzEr0E2iQCMQQCDtByKqJo7ahRxVgKi16jVrIxMq2+1JjaFkur4ojaqeH6XqtdJZ76ySMHpvAqYchNCmFi1WGPVtlRZwcnFZGaGkK4TOrArNNRSaUeS1yH+oVtmoykHYMbfcP6nSASdoaD1XFg4R+Y+XyFq9pal601iNdQtxz8IDfv5LNb9W5vz2WkIUP8ArOxl1u7EH5xUqjY7sH8oPEEY+yqn6eJ+xRq9SXtH5Wx85yjAp1vqPFQDTmjNpXn3RryWloTR/eNqTgAKZ5GoJ8g7omSvR0Y57WFo+przxuOg88Quoptu1TdiDGXAAmFEkUmBjcm3oO28ZPzcqtmqm8CrkZ26npmxi7jmTIxyK5avZyORjjgMl2lsoGoQdUKodFXvqSslEuOPRbPmeC1NJ6ILXGPpJEH9jnO6XfNZVHNTjSVbYPA06g8D7+6VY4vGq9eG6fnkhB00y3YZ+6nOIO0R1Sw0Q7EO258V13Z203qIbMlhu8s2+XouPAz3GR6/dbvZl/icNrAehj3Hmqievx0zqiC9yYvQHPVYzTKlKFfUe9QBpSQhUTIDrGFEaAVnU6+CK2ssMdC9cCDWpEZIdGurjXyl+EqtCKx0KVVutVy5OXQ867R2RzLTULgYc57mk4SDJBHWFkk4Hf8APZdP24eTXYCcO6Ef7zJ8vJc09uQ+bfdaJJ4+lqTvrU838L3uoD6idg90Bp9m7LetDHDENqtvDcWvMnd4COa2qrRTYGtwgXeIBIEoXY6mW946IBa2DqJBdPzerGkaWE7zPMynP1HVZfeTmmpOgqEKRbGK1ZuhsrwWhEcJWdoyqctW1aAdqWdXA6tIXSNZa4DiWke64R9EsdBzutJ3Xmh0cpXoNTITqx+dVxmm2Hvnkj6jgdoDQEqfKhSGDgk7FoOxSoZxvTUxg4bj6j7JLJufH7rY7N0yC5xyi6N+I+yx48I+fMlu6HqHuz+t0eSrmfU9fjSfUQnPQ3PQi9aYy1YvqJcq/eJxURgWWOSQBUTJYetmlaVcZXC55tZFp2grPyudOhpVFoUHrnbPaFsWOrIUdRpzdahOCrOCI1yHUCiKch20sLnFtVokBpDjsiSCepXLNbiNxb1j+y9A7Rf9PVj8h/v5SuEP/LG01I6Nw/8AI/AtImq9L6j+k+hUxGe1rp4iYPzYo0853H0Vt9P+VTqTk40yNmbsNxx6lMm72RfDHNk4mY1YYYb8pHDatW1twWD2Rqw57fzAGNUjPmuiqBNFczaG4lCvQr2kGQVQctZ+M60NH1QD7rXFYalzLXwrVG1wlYcrVrV8Fy2l33qs8Buz1ea1aleVhWl8vJ+ZJdT4rn9DpZjbPuFGlmefoUS7Fzf4uEkfZDGv5qKjFwmtw6e627BSLGAHM4n50WQD9P7Vs96r4jPu/Ik5yEXJnuQnvVsky5IOVe+pNcg9WA5JAD0kGMHIlNyiGKQChS5RetOzWqFiNcjsrQpsOXHRstyK21yuaFoR6dqU+FztpaQ8bHt1ua4DiRguKp0/5AdsrRwlrf8A5XTi0yszStmAovu4S8VCN+R+6eD1rAJhrRudznA+kcldONlOu7VaeEgg9cFXNPwNfqDy33WpoCmHU6jHay351CBb8VNA1C2u2MjqOuRI4HeuvqPwXC0nFjgci0xwIMg+q6+hXndITLpQt4M4qg5aGknalnjFaT8Z0z0zUnhQmEyTfUWU7WfmP+FctDsCq9FskDiTz/wFHf7Ivj5LUqxyGwN5ITT/AO3ofui2j6jw9v7hCuwI2iepU39XPyJgeJvAe5VzvUEM17oUlpJjDrrRRUUXFRCeExiKcJ7qcNQLESkplqSCWwU5KheUC5RjQW8lfQS9IJ4Bu8Um1EEJwEYFulURLR42ObtEKmHIjXowazaYJoPbGLX3vKD7qxoKrDncJ3Y5+3RWQwY4fVnvWXYSWVIO8e6nFbsoml6MOvDJ+f6plXdH2mWN3YdFKtTDxB/ws+yAseWHI+cZEJ5lG7Gha6hcUAKT3KKtBnFCqFRq1QEPvJQQVpdkOalZxr1lDDZJJ2/Ajypk26q/JivUOJ6e/t5qTm+IbgFCliZ4lHhKTTtz4ICkogqUq0HapgIQUryAKApSg3kryAMSkgFySAd1YnBuKqmo4mM+CBKQKzbTIuvvNDTeBkSQL0t3OvAY8JG9Eo2+PqaD1HmFT747euPqo3lP0/jTNrYcQC3dmOuxFY8HIzwWR898UWlSJBMxDSR/URdlo3+LyPOtTeWknDlSZWN3EtlsCDMumZzyLcBEDmpstQO5OVN5XLyrV6MuDhmCJ3hOKgKcvVfpfgxeovAMHWMQq1SvCG61bEEs1KgGaqVbQShVKhOaGSgjuKYVCFElMgCiqnNSQgJINYpkBTlVE4ckFsFPeVdtRSDkwNeT3kGU95GgW8nlBvJ7yAmSkoSkgKqSSSzaEknDSnuIGGDki4/Of3U+73qQpYoPKECnvnKcvf8AwFMs/umuBAymbVIyJUxXKg5oGXmk0xlxTLDmoo94mLUmtRpeDl6V5EDRr8gpOhv0y6RBlsRwz6o9H4CNQ7B0TGoUnDceicNjIg9fdAxACUyMy7iSSDqgAjnioE7eqel5QSRalNoiHB20QRHUCVC6jR5RSTpoRpeUxUTiohpQnpeRr4S7wISSWq8id6khpJbT8xPuzsU20sJgo4y+bEOjnzSXhjMp4kecpj7lEHs70KDDhJoUXKTM+SATiNmCTnDV0+yT8uqG3NBJDKAB79VHu04z5J0Amg7AUgNydRQD3d6k3Dfz+b0z9SZ33QBRUT94hpFGGMKh2pp4dEKl7FFdl1SBnEHMDoldbs8z91A5dFFyYEc2nsPVQ7luonnBTJnIJMWYfmHRObHse3zCg1SagYY2N21p5n3Cj/Cu2DqPujFJLRgBs7tnmPukrO1JMY//2Q=='
        },
    ])

    function onPressHandler() {
        setModalVisibility(!isModalVisible);
    }

    function addItemPressHandler(item) {

        item.id = Math.random().toString();
        //item.image = 'https://image.shutterstock.com/image-photo/islamabad-pakistan-april-25-2019-260nw-1407461093.jpg'
        setItem((prevItems) => {
            return [item, ...prevItems];
        });
        showDialog();

    }

    function showDialog() {
        setDialogVisiblity(!hideDialog);
    }
    const {language, setLanguage} = useContext(LanguageContext)
    useEffect(() => {
        setLocal(language);
    }, [language])

    return (
        <View style={{ flex: 1 }}>
            <Header navigation={navigation} />

            <View style={{ margin: 10, alignItems: 'flex-end' }}>
                <Button
                    title={strings('createNew')} onPress={() => showDialog(true)} />
            </View>

            {/* <HomeModal
                navigation={navigation}
                isModalVisible={isModalVisible}
                showModal={onPressHandler}
                addItemPressHandler={ addItemPressHandler } /> */}

            <FlatList
                data={items}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity>
                        <Card>
                            <Image style={styles.image} source={{ uri: item.image }} />
                            <Text style={styles.title}>{strings('title')}</Text>
                            <Text style={styles.text}>{ strings('desc') }</Text>
                            <Button title={strings('details')} onPress={() => navigation.navigate('Details',
                                {
                                    title: item.title,
                                    desc: item.desc,
                                    image: item.image
                                })} />
                        </Card>
                    </TouchableOpacity>
                )}


            />


            <Dialog
                navigation={navigation}
                hide={hideDialog}
                showDialog={showDialog}
                addItemPressHandler={addItemPressHandler}
            />
        </View>





    );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 120
    },
    title: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: 'bold'
    },
    text: {
        marginTop: 5,
        marginBottom: 10
    }
});