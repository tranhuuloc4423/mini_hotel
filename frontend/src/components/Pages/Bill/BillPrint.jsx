import { Document, Page, Text, View, StyleSheet } from 'react-pdf'

const styles = StyleSheet.create({
    table: {
        display: 'table',
        width: '100%',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#000'
    },
    tableRow: { margin: 'auto', flexDirection: 'row' },
    tableCell: {
        margin: 'auto',
        width: '25%',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#000',
        padding: 5
    }
})

const BillPrint = () => {
    return (
        <Document>
            <Page>
                <View>
                    <Text>BILL DETAIL</Text>

                    <View style={styles.table}>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Text>ID</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>Name</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>Price</Text>
                            </View>
                        </View>

                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Text>Room 1</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>dsa</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>dsa</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </Page>
        </Document>
    )
}

export default BillPrint
