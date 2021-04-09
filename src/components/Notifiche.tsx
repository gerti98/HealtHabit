import { Plugins, LocalNotification } from '@capacitor/core';
const { LocalNotifications } = Plugins;

class Notifiche {
  public async schedule() {
    try {
      // Request/ check permissions
      if (!(await LocalNotifications.requestPermission()).granted) return;

      // Clear old notifications in prep for refresh (OPTIONAL)
      const pending = await LocalNotifications.getPending();
      if (pending.notifications.length > 0)
        await LocalNotifications.cancel(pending);

      await LocalNotifications.schedule({
        notifications: [{
          title: 'Ah Fantastica',
          body: "Aho mica t'ho detto che fai caa",
          id: 554,
          schedule: { at: new Date(Date.now() + 1000 * 5) },
          sound: "bell",
        
          actionTypeId: "",
          extra: null
        }]
      });
    } catch (error) {
      console.error(error);
    }
  }
}

export default new Notifiche()