"use strict";(self.webpackChunkbotwithuswiki=self.webpackChunkbotwithuswiki||[]).push([[476],{1160:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>h,toc:()=>p});var n=i(7624),a=i(2172),o=(i(1504),i(3940)),s=i(9188),r=i(7824);i(9080);const d=JSON.parse('[{"date":"2024-02-17","title":"Patch 1.1.2a","items":["\ud83d\udd27Agent Update:\ud83d\udd27","Update to game revision 935-1","Fixed variable debug"]},{"date":"2024-02-17","title":"Patch 1.1.2a","items":["\ud83d\udd27Agent Update:\ud83d\udd27","Fixed component properties returning the wrong value.","Improved the performance of variable fetching.","\u2615Java Core API:\u2615","Fixed an issue NPC type options not always populating the correct array.","Fixed an issue when querying for follow index (interactId) not looking up the correct layout.","Added byType and byParentType ID queries to NpcQuery.","ItemTypes now calculate the noted variant.","\ud83d\udee0\ufe0fLoader Update:\ud83d\udee0\ufe0f","Revision bump 1.1.2a"]},{"date":"2024-02-13","title":"patch 1.1.1a","items":["\ud83d\udd27Agent Update:\ud83d\udd27","Added varbit debug.","Added distance filter to SceneObject debug.","Advanced tooltips","Query generation from tooltips, npc, ground items, and scene objects supported at this time","Advanced tooltips, query generation now supports items (Component and Inventory queries)","\u2615Java Core API:\u2615","New snapshot: `net.botwithus.rs3:botwithus-api:1.0.0-20240213.053515-21`.","Bumped `apiVersion` to 2, you\'ll need to update your script.ini and recompile.","Added support for Jagex database row reading from the cache using `ConfigManager` class.","New `Discord` class, leveraging the user\'s Discord token. Exposes name, id, email and a `sendMessage` function allowing messages to be DM-ed to users.","Standardized Influx events to work towards metrics for all scripts.","Custom icons pack added - ty @PzooT.","\ud83d\udee0\ufe0fLoader Update:\ud83d\udee0\ufe0f","Revision bump 1.1.1a.","\u26a0\ufe0f Scripts need recompilation and ini updates. Set `apiVersion=2`.\u26a0\ufe0f"]},{"date":"2024-02-11","title":"Patch 1.1.0a","items":["\ud83e\udd16Public xAPI Update:\ud83e\udd16","New snapshot: `net.botwithus.xapi.public:api:1.0.0-20240211.205614-15`.","Removed empty `ActionBar` class.","Added prayers and prayer book classes with all sorts of utility.","Minor Dialog fixes, added support for barrows dialogs."]},{"date":"2024-01-21","title":"Patch 1.1.0a","items":["\ud83e\udd16Public xAPI Update:\ud83e\udd16","New snapshot: `net.botwithus.xapi.public:api:1.0.0-20240205.203949-14`.","Fixed `Dialog.getOptions()`.","Fixed `Dialog.interact(String optionText)`.","Fixed `Lodestone.teleport` to account for viswax/fast teles."]},{"date":"2024-01-23","title":"Patch 1.1.0a","items":["\ud83d\udd27Agent Update:\ud83d\udd27","Added debug console that shows your corresponding manual actions performed in-game.","Enhanced NPC Debug (Hovering over NPCs will show additional information).","Added BeginDisabled and EndDisabled and ProgressBar to ImGui.","\u2615Java Core API:\u2615","Fixed background script activation when a foreground script is active.","New core snapshot: `net.botwithus.rs3:botwithus-api:1.0.0-20240123.223505-20`.","\ud83d\udee0\ufe0fLoader Update:\ud83d\udee0\ufe0f","Revision bump 1.1.0a."]},{"date":"2024-01-20","title":"Patch 1.0.9a","items":["\ud83d\udd27Agent Update:\ud83d\udd27","Fixed auto login not re-entering password if kicked to login screen"]},{"date":"2024-01-19","title":"Patch 1.0.9a","items":["\ud83d\udd27Agent Update:\ud83d\udd27","Fixed a bug causing some CS2 script execution to wait 100ms.","Fixed a crash with interfaces with extremely large text fields (Group boss interface).","Fixed autologin checkbox (can be enabled after client launch, even if autologin was not selected).","\u2615Java Core API:\u2615","Added capability to detect steam client runtime.","New Snapshot: `net.botwithus.rs3:botwithus-api:1.0.0-20240119.204351-19`.","This update does not require you to recompile your scripts. However, we always recommend staying up to date.","\ud83d\udee0\ufe0fLoader Update:\ud83d\udee0\ufe0f","Revision bump 1.0.9a","Steam support fix."]},{"date":"2024-01-18","title":"Patch 1.0.8a","items":["\ud83d\udd27Agent Update:\ud83d\udd27","Added player variable debugger (shows changed varps, can scan for value ranges, etc).","Fixed interface debug left-hand side being draggable.","Moved component interacts synchronized to game ticks - Reverted.","\ud83d\udee0\ufe0fLoader Update:\ud83d\udee0\ufe0f","Revision bump 1.0.8a.","Added support for steam/google accounts."]},{"date":"2024-01-17","title":"Patch 1.0.7a","items":["\ud83d\udd27Agent Update:\ud83d\udd27","Increased speed at which certain game entities get cached.","Fixed issues with entity headbars that could cause a crash when loading between regions.","Added support for checking the spot animation applied to a player/npc entity.","Increased CS2 execution speed.","Rewrote caching system to be synchronized with game engine ticks, improving client stability significantly.","Updated projectile start and end cycle values to the correct size.","Increased text size for component params and options.","\u2615Java Core API:\u2615","Fixed various stability issues allowing for querying at 1ms intervals.","Added `getCooldownPrecise(String abilityName)` to return the milliseconds until the ability is off cooldown in ActionBar class.","Added a new query filter for Player and Npc queries for the spot animation(s) linked to the entity.","Added a `SpotAnimSpawnEvent` which can be subscribed to, currently only supports static spot anims (tied to a specific tile). It will fire both when a static spot animation is added and removed from rendering; if the ID is -1, it was removed.","Added an `isMember()` function in Client to check if the logged-in player is a member.","New core snapshot: `net.botwithus.rs3:botwithus-api:1.0.0-20240118.024345-17`.","\ud83d\udee0\ufe0fLoader Update:\ud83d\udee0\ufe0f","Bump revision to 1.0.7a.","New Jvm runtime for scripts. Scripters, make sure you refresh gradle dependencies and recompile!"]},{"date":"2024-01-12","title":"Patch 1.0.6a","items":["\ud83d\udd27Agent Update:\ud83d\udd27","Fixed scene object config type being null at times, causing crash"]},{"date":"2024-01-11","title":"Patch 1.0.6a","items":["\ud83d\udd27Agent Update:\ud83d\udd27","Fixed scene object crash on getting the interact id","Fixed getting component text crash on the loot interface (could fix others too)","Fixed improper interact id being returned","Fixed spot animation id offset"]},{"date":"2024-01-08","title":"Agent Patch 1.0.6a","items":["\ud83d\udd27Agent Update:\ud83d\udd27","- Fixes for Pathing entities that resolve crashing.","- Fixed overhead text on NPCs.","- Changed return type for `ListBoxHeader` to boolean; only end your list box if the boolean was true.","- ImGui Updates.","- Updated BotWithUs RuneScape 3 to Revision 934-1","\u2615Java Core API:\u2615","Fixes for prayer use on ActionBar, more functions available such as contains functions for items/abilities.","Fixed overhead text on NPCs.","ImGui Updates.","\ud83d\udee0\ufe0fLoader Update:\ud83d\udee0\ufe0f","Bump revision to 1.0.6a:","Ability to change an active session to not restart when the client crashes."]},{"date":"2024-01-6","title":"Patch 1.0.5a","items":["\ud83d\udd27Agent Update:\ud83d\udd27","Fixed debug menu player direction.","Fixed debug menu inventory ID.","Changed debug menu text search for SceneObject to be a string contains search rather than string equals.","\ud83e\udd16Public xAPI Update:\ud83e\udd16","#pause and #resume have been added to the Stopwatch class.","Stopwatch#elapsed has been updated to account for the pause/resume breakpoints.","Bank#open will now open the Shantay Pass bank chest.","New snapshot: `net.botwithus.xapi.public:api:1.0.0-20240106.185509-13`."]},{"date":"2024-01-5","title":"Patch 1.0.5a","items":["\ud83d\udd27Agent Update:\ud83d\udd27","Fixed the length of component options read.","Fixed player direction values.","Fixed CS2 scripts causing a client crash on the release build.","Fixed name/options population on certain SceneObjects.","Fixed action bar functions for cooldown and ability firing on the release build.","Fixed ground item tiles.","\ud83d\udee0\ufe0fLoader Update:\ud83d\udee0\ufe0f","The loader has been bumped to 1.0.5a.","\u2615Java Core API:\u2615","Fixed Components options length.","New snapshot: `net.botwithus.rs3:botwithus-api:1.0.0-20240105.060643-15`."]},{"date":"2024-01-3","title":"Patch 1.0.4a.","items":["\ud83d\udd27Agent Update:\ud83d\udd27","BWU Overlay Smart Click through, BWU Overlay now can tell if you\u2019re clicking on the overlay or the game.","Queries have been reworked natively to improve logs and reduce crashes.","Stance ID has been added to the Pathing Entity (NPC/Player).","Directions (Direction 1 and 2) combined; these allow us to know which direction a player is facing.","Reworked some debug windows to support searching and improved UI.","Added a check onto interface debug to reduce lag on searching text.","CS2 (Jagex Client Script) has been reworked to reduce crashing and is now more efficient and easier to invoke.","Fixed \\"Open Script Logs\\" opening the incorrect file.","BotWithUs Icon is now draggable!","\u2615Java Core API:\u2615","Introduced Stance Animation and Direction methods in the NPCs and Players.","CS2 (Jagex Client Script) has been completely rewritten to reduce crashing.","An incubator ActionBar API has been introduced - Please note this is an incubator stage and is subject to changes.","Script Logs should now be appended to the script logs file.","Ground Item Query now returns the EntityResultSet.","Queries now support the BiPredicate OR, AND, and NEGATE methods."," Component params are now supported.","\ud83d\udee0\ufe0fLoader Update:\ud83d\udee0\ufe0f","The loader has been bumped to 1.0.4a.","\ud83e\udeb2Bug Fixes:\ud83e\udeb2","Interface debug lag when searching by text.","Minimenu overlay displays correct action instead of N/A.","Sprite IDs are fixed in interfaces.","Various performance enhancements."]},{"date":"2024-01-2","title":"Patch 1.0.2a","items":["\ud83e\udd16Public xAPI Update:\ud83e\udd16","Fixed interaction with string/option for Equipment and Backpack classes","New snapshot version: net.botwithus.xapi.public:api:1.0.0-20240103.033337-12"]},{"date":"2023-12-30","title":"Patch 1.0.3a","items":["\ud83e\udd16Public xAPI Update:\ud83e\udd16","Further improvements to TreeTask scripts.","Permissives per branch are now singularly isolated. This will help us troubleshoot which permissives are specifically causing improper script behavior.","`Bank#depositAll` and `#withdrawAll` related functions will now utilize the Transfer Type \\"All\\" option in the player\'s banking interface.","New snapshot: `net.botwithus.xapi.public:api:1.0.0-20231230.211133-11`."]},{"date":"2023-12-23","title":"Patch 1.0.3a","items":["\ud83d\udd27Agent Update:\ud83d\udd27","BWU Overlay Smart Click through, BWU Overlay now can tell if you\'re clicking on the overlay or the game.","Queries have been reworked natively to improve logs and reduce crashes.","Stance ID has been added to the Pathing Entity (NPC/Player).","Directions (Direction 1 and 2) combined; these allow us to know which direction a player is facing.","Reworked some debug windows to support searching and improved UI.","Added a check onto interface debug to reduce lag on searching text.","CS2 (Jagex Client Script) has been reworked to reduce crashing and is now more efficient.","Fixed \\"Open Script Logs\\" opening the incorrect file.","\u2615Java Core API:\u2615","Introduced Stance Animation and Direction methods in the NPCs and Players.","CS2 (Jagex Client Script) has been completely rewritten to reduce crashing.","An incubator ActionBar API has been introduced (Thank Cipher) - Please note this is an incubator stage and is subject to changes.","Script Logs should now be appended to the script logs file.","Ground Item Query now returns the EntityResultSet.","Queries now support the BiPredicate OR, AND, and NEGATE methods."]},{"date":"2023-12-19","title":"Patch 1.0.2a","items":["\ud83e\udd16Public xAPI Update:\ud83e\udd16","Bank#depositAll functions have been updated to account for items that only have a \\"Deposit-1\\" option. e.g., clue scrolls, strange rocks.","Added `Permissive` class and its utilization in `BranchTask`.","New snapshot: `net.botwithus.xapi.public:api:1.0.0-20231219.220946-9`."]},{"date":"2023-12-16","title":"Patch 1.0.2a","items":["\ud83e\udd16Public xAPI Update:\ud83e\udd16","Added Bresenham pathing to `Traverse#to` for `Locatables` further than 60 coordinates away.","New snapshot: `net.botwithus.xapi.public:api:1.0.0-20231217.035222-8`."]},{"date":"2023-12-11","title":"Patch 1.0.2a","items":["\ud83d\udee0\ufe0fLoader Update:\ud83d\udee0\ufe0f","Implemented a temporary workaround for launching jagex accounts"]},{"date":"2023-12-6","title":"Patch 1.0.2a","items":["\ud83e\udd16Public xAPI Update:\ud83e\udd16","Added `Bank::loadLastPreset`.","`Bank::open` now supports more bank objects.","New snapshot: `net.botwithus.xapi.public:api:1.0.0-20231206.004031-6`.","\u2615Java Core API:\u2615","Fixed an issue with the ScriptHandle::invokeExact type converstion from Integer to primitive int"]},{"date":"2023-12-6","title":"Patch 1.0.2a","items":["\ud83e\udd16Public xAPI Update:\ud83e\udd16","Added `Bank::loadLastPreset`.","`Bank::open` now supports more bank objects.","New snapshot: `net.botwithus.xapi.public:api:1.0.0-20231206.004031-6`."]},{"date":"2023-12-5","title":"Patch 1.0.2a","items":["\ud83d\udd27Agent Update:\ud83d\udd27","Fixed Item Offsets on components.","Fixed text Offsets on components.","\u2615Java Core API:\u2615","Fixed issue with chat segment now defining the correct sizes.","Queries are `BiPredicate`; Overridden the `and`, `or`, and `negate` methods are now more friendly."]},{"date":"2023-12-4","title":"Patch v1.0.0a","items":["\ud83d\udd27Agent Update:\ud83d\udd27","Update to RuneScape Revision 933-2"]},{"date":"2023-12-3","title":"Patch v1.0.0a","items":["\ud83e\udd16Public xAPI Update:\ud83e\udd16","Added logging to Flogger for API-level functions.","Fixed an issue that was causing deposit actions in the `Bank` class from executing too quickly when attempting to deposit multiple items at once.","New snapshot: `net.botwithus.xapi.public:api:1.0.0-20231203.195213-5`."]},{"date":"2024-11-29","title":"Patch v1.0.0a","items":["\ud83d\udd27Agent Update:\ud83d\udd27","Increase String size for chat events; this was causing crashes if the player name or message was too large.","Moved Anti-AFK to Modules.","Re-added the BotWithUs Icon.","Fixed NPC overhead text causing crashes.","Variable debugger for varps was added.","Added menu items for opening various directories.","Fixed Projectiles","\u2615Java Core API:\u2615","`ScriptLookup` now requires a resource owner (Script) so reloading releases the handles.","`Ground Item Query` now returns `EntityResultSet`.","Optimized the query system to use less memory.","`ScriptConsole` now has static `println` methods that print to the currently active script.","\ud83d\udee0\ufe0fLoader Update:\ud83d\udee0\ufe0f","Introduced version number for the loader into the title."]},{"date":"2023-11-28","title":"Patch v1.0.0a","items":["\ud83e\udd16Public xAPI Update:\ud83e\udd16","Fixed an issue that was preventing `Bank::depositAll` and `Inventory::containsAnyExcept` from working as intended.","Fixed several issues in the `LootInventory` class that were preventing it from working as intended."]},{"date":"2023-11-24","title":"Patch v1.0.0a","items":["\ud83d\udd27Agent Update:\ud83d\udd27","Bug Fixes","\u2615Java Core API:\u2615","Continued fixes for critical queries; all delays are now locked to a minimum of 100 ms.","New Local Player API:","Local Player is now fully live information.","`LocalPlayer::getTarget`","`LocalPlayer::inCombat`","`LocalPlayer::getCurrentHealth`","`LocalPlayer::getMaximumHealth`","`LocalPlayer::getAdrenaline`","`LocalPlayer::getSummoningPoints`","`LocalPlayer::getPrayerPoints`","\ud83d\udee0\ufe0fLoader Update:\ud83d\udee0\ufe0f","Fixed issue with auto updater."]},{"date":"2023-11-23","title":"Patch v1.0.0a","items":["\ud83d\udd27Agent Update:\ud83d\udd27","Removed BotWithus Icon due to Jagex not playing nice with OpenGL states.","Cleaned up code and introduced new C API functions.","\u2615Java Core API:\u2615","Fixed a critical issue regarding queries crashing the client if queried faster than 500 ms.","- New LoginManager API:","`LoginManager::setWorld(<world id>)`","`LoginManager::setAutoLogin(<true or false>)`","`LoginManager::getLoginStatus()`","`LoginManager::isLoginInProgress()`","`LoginManager::getWorld()`"]},{"date":"2023-11-19","title":"Patch v1.0.0a","items":["\ud83d\udd27Agent Update:\ud83d\udd27","Chat Event Method:","Method signature changed to match RuneScape\'s.","Auto Login should now work as intended.","\u2615Java Core API:\u2615","Fixed an issue preventing Bank.open from working as intended, affecting several bots.","Fixed some script initialization issues."]},{"date":"2023-11-18","title":"Patch v1.0.0a","items":["\ud83d\uddbc\ufe0fImGui Class Updates:\ud83d\uddbc\ufe0f","`SetItemWidth(float width)`: Sets the item width.","`Columns(int count, String label, boolean border)`: Creates a number of columns with optional borders.","`NextColumn()`: Advances to the next column.","`SeparatorText(String text)`: Inserts a text separator.","`Indent(float width)`: Applies indentation of a specified width.","Hitmarks are now accurately read from the native event.","\ud83d\udee0\ufe0fLoader Update:\ud83d\udee0\ufe0f","Auto login can now be toggled on game launch.","Fixed issues with active sessions and game restarts.","Now detects, downloads, and runs new installers for you.","Loading screen now displays text showing the loading stage.","\ud83d\udd27Agent Update:\ud83d\udd27","NPC and Player Queries are now functioning correctly.","Resolved the Inventory Debug issue.","Scene Object Debug has new search options and altered sorting to prevent flickering.","Script runtime memory issue has been resolved.","\u2615Java Core API:\u2615","Script Runtime now correctly accounts for Kotlin runtime/libraries, and adding these libraries to your scripts is no longer required.","Kotlin Libraries Includes:","Kotlin stdlib","kotlinx coroutines","insert koin"]},{"date":"2023-12-11","title":"v1.0.0a","items":["Initial alpha release of the client."]}]'),c={title:"Introduction",description:"Introduction to BotWithUs.",slug:"/introduction"},l=void 0,h={id:"Introduction/index",title:"Introduction",description:"Introduction to BotWithUs.",source:"@site/docs/Introduction/index.md",sourceDirName:"Introduction",slug:"/introduction",permalink:"/introduction",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Introduction",description:"Introduction to BotWithUs.",slug:"/introduction"},sidebar:"mainSidebar",next:{title:"Getting Started Botting",permalink:"/getting-started-botting"}},u={},p=[{value:"Client Status",id:"client-status",level:2},{value:"Contributors",id:"contributors",level:2},{value:"Changelog",id:"changelog",level:2}];function g(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.c,{title:"Introduction",skill:"hello"}),"\n",(0,n.jsx)(t.admonition,{type:"hidden",children:(0,n.jsx)(t.h2,{id:"client-status",children:"Client Status"})}),"\n",(0,n.jsxs)(s.c,{title:"Client Status",children:[(0,n.jsx)("div",{class:"centered-content",children:(0,n.jsx)(t.p,{children:"Non-Jagex accounts: \u2705 |\nJagex Accounts: \u2705 |\nGoogle accounts: \u2705 |\nSteam: \ud83d\udd34"})}),(0,n.jsx)(t.admonition,{title:"Jagex accounts",type:"warning",children:(0,n.jsx)(t.p,{children:"Jagex accounts are currently manually injected due to an update to the Jagex launcher. An elegant solution is in progress."})}),(0,n.jsx)(t.h1,{id:"current-api-versions",children:"Current API Versions:"}),(0,n.jsx)(t.admonition,{title:"The current version of the core API is:",type:"tip",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-kotlin",children:"net.botwithus.rs3:botwithus-api:1.0.0-20240213.053515-21\n"})})}),(0,n.jsx)(t.admonition,{title:"The current version of the extended API is:",type:"tip",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-kotlin",children:"net.botwithus.xapi.public:api:1.0.0-20240211.205614-15\n"})})})]}),"\n",(0,n.jsx)(t.admonition,{type:"hidden",children:(0,n.jsx)(t.h2,{id:"contributors",children:"Contributors"})}),"\n",(0,n.jsx)(s.c,{title:"Active Contributors",children:(0,n.jsx)("div",{class:"centered-content",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Role"}),(0,n.jsx)(t.th,{children:"Contributor"}),(0,n.jsx)(t.th,{children:"Discord ID"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Staff"}),(0,n.jsx)(t.td,{children:"Pookie"}),(0,n.jsx)(t.td,{children:"@pookie420"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Staff"}),(0,n.jsx)(t.td,{children:"DrJavatar"}),(0,n.jsx)(t.td,{children:"@drjavatar"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Staff"}),(0,n.jsx)(t.td,{children:"Cipher"}),(0,n.jsx)(t.td,{children:"@ciphers."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Staff"}),(0,n.jsx)(t.td,{children:"Sudo"}),(0,n.jsx)(t.td,{children:"@sudopro"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Staff"}),(0,n.jsx)(t.td,{children:"ARMAR X K1NG"}),(0,n.jsx)(t.td,{children:"@armarxk1ng"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Staff"}),(0,n.jsx)(t.td,{children:"Timmy"}),(0,n.jsx)(t.td,{children:"@timmyb"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Web Dev"}),(0,n.jsx)(t.td,{children:"offline"}),(0,n.jsx)(t.td,{children:"@anjato"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Moderator"}),(0,n.jsx)(t.td,{children:"KBD"}),(0,n.jsx)(t.td,{children:"@KBD"})]})]})]})})}),"\n",(0,n.jsx)(t.admonition,{type:"hidden",children:(0,n.jsx)(t.h2,{id:"changelog",children:"Changelog"})}),"\n",(0,n.jsx)(r.c,{changes:d})]})}function m(e={}){const{wrapper:t}={...(0,a.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(g,{...e})}):g(e)}}}]);