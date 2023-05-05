//META{"name":"DisableRightClickInvites"}*//

class DisableRightClickInvites {
    getName() { return "DisableRightClickInvites"; }
    getDescription() { return "Hides the 'Invite to Server' option in the context menu when right-clicking on a user."; }
    getVersion() { return "1.1.0"; }
    getAuthor() { return "LakeWeasel"; }

    start() {
        console.log('DisableRightClickInvites: Starting plugin');
        this.attachMenuListener();
    }

    stop() {
        console.log('DisableRightClickInvites: Stopping plugin');
        this.detachMenuListener();
    }

    attachMenuListener() {
        console.log('DisableRightClickInvites: Attaching menu listener');
        document.addEventListener('DOMNodeInserted', this.menuListener);
    }

    detachMenuListener() {
        console.log('DisableRightClickInvites: Detaching menu listener');
        document.removeEventListener('DOMNodeInserted', this.menuListener);
    }

    menuListener(event) {
        console.log('DisableRightClickInvites: menuListener triggered');
        const inviteOption = document.querySelector('#user-context-invite-to-server');

        if (inviteOption) {
            console.log('DisableRightClickInvites: Hiding "Invite to Server" option');
            inviteOption.style.display = 'none';
        }
    }
}
