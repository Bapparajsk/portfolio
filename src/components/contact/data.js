export const manu = {
    File: [
        "New Text File",
        "New File...",
        "New Window",
        "New Window with Profile",
        "<hr>",
        "Open File...",
        "Open Folder...[Ctrl+K Ctrl+O]",
        "Open Workspace from File...",
        "Open Recent",
        "<hr>",
        "Add Folder to Workspace...",
        "Save Workspace As...",
        "Duplicate Workspace",
        "<hr>",
        "Save",
        "Save As...",
        "Save All",
        "<hr>",
        "Share",
        "Auto Save",
    ],
    Edit: [
        "Undo",
        "Redo",
        "<hr>",
        "Cut",
        "Copy",
        "Copy As",
        "Paste",
        "<hr>",
        "Find",
        "Replace",
        "<hr>",
        "Find in Files",
        "Replace in Files",
        "<hr>",
        "Toggle Line Comment",
        "Toggle Block Comment",
        "Emmet: Expand Abbreviation",
    ],
    Selection: [
        "Select All",
        "Expand Selection",
        "Shrink Selection",
        "<hr>",
        "Copy Line Up",
        "Copy Line Down",
        "Move Line Up",
        "Move Line Down",
        "Duplicate Selection",
        "<hr>",
        "Add Cursor Above",
        "Add Cursor Below",
        "Add Cursor to Line Ends",
        "Add Next Occurrence",
        "Add Previous Occurrence",
        "Select All Occurrences",
        "<hr>",
        "Switch to Ctrl+Click for Multi-Cursor",
        "Column Selection Mode",
    ],
    View: [
        "Command Palette...",
        "Open View...",
        "<hr>",
        "Appearance",
        "Editor Layout",
        "<hr>",
        "Explorer",
        "Search",
        "Source Control [Ctrl+Shift+G G]",
        "Run",
        "Extensions",
        "<hr>",
        "Problems",
        "Output [Ctrl+Shift+H]",
        "Debug Console",
        "Terminal",
        "<hr>",
        "Ward Wrap",
    ],
    Go: [
        "Back",
        "Forward",
        "Last Edit Location",
        "<hr>",
        "Switch Editor",
        "Switch Group",
        "<hr>",
        "Go to File...",
        "Go to Symbol in Workspace...",
        "<hr>",
        "Go to Symbol in Editor...",
        "Go to Definition",
        "Go to Declaration",
        "Go to Type Definition",
        "Go to Implementation",
        "Go to References",
        "<hr>",
        "Go to Line/Colum...",
        "Go to Bracket",
        "<hr>",
        "Next Problem",
    ],
    Run: [
        "Start Debugging",
        "Run Without Debugging",
        "Stop Debugging",
        "Restart Debugging",
        "<hr>",
        "Open Configurations...",
        "Add Configuration...",
        "<hr>",
        "Step Over",
        "Step Into",
        "Step Out",
        "Continue",
        "<hr>",
        "Toggle Breakpoint",
        "New Breakpoint",
        "<hr>",
        "Enable All Breakpoints",
        "Disable All Breakpoints",
        "Remove All Breakpoints",
        "<hr>",
        "Install Additional Debuggers...",
    ],
    Terminal: [
        "New Terminal",
        "Split Terminal",
        "<hr>",
        "Run Task...",
        "Run Build Task...",
        "Run Active Task...",
        "Run Selected Text",
        "<hr>",
        "Show Running Tasks",
        "Restart Running Task",
        "Terminate Task",
        "<hr>",
        "Configure Tasks...",
        "Configure Default Build Task...",
    ],
    Help: [
        "Welcome",
        "Show All Commands",
        "Documentation",
        "Editor Playground",
        "<hr>",
        "Keyboard Shortcuts Reference",
        "Video Tutorials",
        "Tips and Tricks",
        "<hr>",
        "Join Us on YouTube",
        "Search Feature Requests",
        "Report Issue",
        "<hr>",
        "View License",
        "Privacy Statement",
        "<hr>",
        "Toggle Developer Tools",
        "Open Process Explorer",
        "<hr>",
        "Download Available Updates",
        "<hr>",
        "About",
    ],
}

export const editroDefaultValue = `
1   const WindowButton = ({ iconName, className, color, isCloseicon }) => {
2       color = color || "#575353";
3   
4       const [mouseOver, setMouseOver] = useState(false);
5       return (
6           <div
7               className={"w-4..."}
8               style={{ backgroundColor: color }}
9               onMouseEnter={() => setMouseOver(true)}
10              onMouseLeave={() => setMouseOver(false)}
11          >
12              {iconName === "Minus" ? (
14                  <Minus size={10} color="#fff" className={!mouseOver && "hidden"} />
15              ) : iconName === "Square" ? (
16                  <Square size={10} color="#fff" className={!mouseOver && "hidden"} />
17              ) : iconName === "X" ? (
18                  <X size={15} color={mouseOver ? "#FFFFFF" : "#000000"} />
19              ) : null}
20          </div>
<div
7               className={"w-4..."}
8               style={{ backgroundColor: color }}
9               onMouseEnter={() => setMouseOver(true)}
10              onMouseLeave={() => setMouseOver(false)}
11          >
12              {iconName === "Minus" ? (
14                  <Minus size={10} color="#fff" className={!mouseOver && "hidden"} />
15              ) : iconName === "Square" ? (
16                  <Square size={10} color="#fff" className={!mouseOver && "hidden"} />
17              ) : iconName === "X" ? (
18                  <X size={15} color={mouseOver ? "#FFFFFF" : "#000000"} />
19              ) : null}
20          </div>
<div
7               className={"w-4..."}
8               style={{ backgroundColor: color }}
9               onMouseEnter={() => setMouseOver(true)}
10              onMouseLeave={() => setMouseOver(false)}
11          >
12              {iconName === "Minus" ? (
14                  <Minus size={10} color="#fff" className={!mouseOver && "hidden"} />
15              ) : iconName === "Square" ? (
16                  <Square size={10} color="#fff" className={!mouseOver && "hidden"} />
17              ) : iconName === "X" ? (
18                  <X size={15} color={mouseOver ? "#FFFFFF" : "#000000"} />
19              ) : null}
20          </div>
21      );
22  };

`