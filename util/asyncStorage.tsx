import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppState } from "react-native";


async function saveStorage(name: string, data: any) {
    try {
        await AsyncStorage.setItem(name, JSON.stringify(data)).then(() => {
            console.log('data saved!');
        });
    } catch (error) {
        console.error(error);
    }
}

async function getStorage(name: string) {
    try {
        let data;
        await AsyncStorage.getItem(name).then((result) => {
            if(result) {
                console.log('storage found!') ;
                data = result;
            } else {
                console.log('Storage not found!');
            }
        })
        return data;
    } catch (error) {
        console.error(error);
    }

}
async function removeStorage(name: string) {
    try {
        await AsyncStorage.removeItem(name);
        console.log(`Removed ${name} storage from AsyncStorage`);
    } catch(error) {
        console.error(error);
    }
}

async function scheduleStorageRemoval(name: string, time: number) {
    const now: Date = new Date();
    // const removalTime = new Date(now.getTime() + time);
    setTimeout(() => removeStorage(name), time);
}

/**
 *
 * @param {string} name
 * @param {any} newData
 * @param {boolean} options overwrites the existing data
 */
async function updateStorage(name: string, newData: any, overwrite: boolean = false): Promise<void> {
    try {
        const dataExists = await getStorage(name);
        if(dataExists) {
            console.log(`There is already a key with the name ${name}. Please`);

            if(overwrite){
                await removeStorage(name).then(async () => {
                    await saveStorage(name, newData);
                })
            }
        }
    } catch(error) {
        console.error(error);
    }
}

export { saveStorage, getStorage, removeStorage, scheduleStorageRemoval, updateStorage }
