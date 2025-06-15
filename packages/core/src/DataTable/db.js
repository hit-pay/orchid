import Dexie from 'dexie';

export const db = new Dexie('hitpay');
db.version(1).stores({
   products: 'id, image, name, categories, display_categories, available, display_available, amount, status, created_at, updated_at', 
});

export async function removeOldLocalDB() {
    try {
        // Check if database exists
        const dbExists = await Dexie.exists('myDatabase');
        
        if (dbExists) {
            console.log('Database found, will be deleted...');
            // Delete database
            await Dexie.delete('myDatabase');
            console.log('Database successfully deleted');
        } else {
            console.log('Database not found');
        }

    } catch (error) {
        console.error('Error:', error);
    }
}