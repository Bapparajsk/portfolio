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
1   "use client";
2
3   import { Fragment, useEffect, useState } from "react";
4   import { Button, Input, Textarea } from "@nextui-org/react";
5   import { Toaster, toast } from 'sonner';
6
7   const Form = () => {
8       const [dot, setDot] = useState(".");
9
10      const [comment, setComment] = useState({ name: "", email: "", message: "" });
11      const [isSending, setIsSending] = useState(false);
12
13      useEffect(() => {
14          const dots = [".", "..", "..."];
15          let idx = 0;
16          let direction = 1;
17
18          const interval = setInterval(() => {
19              idx += direction;
20              if (idx === dots.length || idx === -1) {
21                  direction *= -1; // Reverse direction
22                  idx += direction; // Correct index after reversing
23              }
24              setDot(dots[idx]);
25              console.log("dot", dots[idx]);
26          }, 1000);
27          return () => clearInterval(interval);
28      }, []);
29
30
31      const sendEmail = async (e) => {
32          const toastId = toast.loading("Sending your massage, please wait...");
33
34          try {
35              await fetch('/api/send', {
36                  method: 'POST',
37                  headers: {
38                      'Content-Type': 'application/json',
39                  },
40                  body: JSON.stringify(e),
41              });
41
42            toast.success("Your massage has been sent successfully!");
43          } catch (e) {
44              toast.error("Failed to send your massage, please try again!");
45          } finally {
46
47          toast.dismiss(toastId);
48          }
49      };
50
51      const onSubmit = async (e) => {
52          e.preventDefault();
53          const {name, email, message } = comment;
54
55          const paramsData = {
56              to_name: "Bapparaj sk",
57              from_name: name,
58              reply_to: email,
59              message: message,
60          }
61          setIsSending(true);
62          await sendEmail(paramsData);
63          setIsSending(false);
64
65          setComment({ name: "", email: "", message: "" });
66      };
67
68      return (
69          <Fragment>
70              <Toaster />
71              <div className={"..."}>
72                  <div className="...">
73                      <div className={"..."}>
74                          <h1 className="...">
75                              Drop Your
76                              <span className="..."> Comments{dot}</span>
77                          </h1>
78                      </div>
79                      <div className="...">
80                          <form
81                              onSubmit={onSubmit}
82                              className="..."
83                          >
84                              <Input
85                                  type="text"
86                                  variant={"underlined"}
87                                  label="Name"
88                                  value={comment.name}
89                                  onValueChange={(name) => setComment(...)}
90                                  isRequired
91                              />
92                              <Input
93                                  type={"email"}
94                                  variant={"underlined"}
95                                  label="Email"
96                                  value={comment.email}
97                                  onValueChange={(email) => setComment(...)}
98                                  isRequired
99                              />
100                             <Textarea
101                                 label="Description"
102                                 variant="underlined"
103                                 labelPlacement={"inside"}
104                                 className="max-w-xs"
105                                 minRows={2}
106                                 fullWidth
107                                 value={comment.message}
108                                 onValueChange={(message) => setComment(...)}
109                                 isRequired
110                                 minLength={10}
111                             />
112                             <Button
113                                 color="primary"
114                                 variant="light"
115                                 loading={isSending}
116                                 type={"submit"}
117                                 className={ "..." }
120                             >
121                                 Cast Your Massage!
122                             </Button>
123                         </form>
124                     </div>
125                 </div>
126             </div>
127         </Fragment>
128     );
129 };
130
131 export default PreviewPage;
132
`