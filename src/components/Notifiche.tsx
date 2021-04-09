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
          title: 'Triumph30',
          body: "prova prova prova",
          id: 554,
          schedule: {
            every: "second",
            count: 10
          }
        }]
      });
    } catch (error) {
      console.error(error);
    }
  }
}

export default new Notifiche()