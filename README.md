# Create Windows Shortcut

Creates shortcuts to scripts and binaries.

Works on Windows!

Example:
```
const windows_shortcut = require("create-windows-shortcut");

windows_shortcut.createShortcut(target_path, destiny_path, name, icon, function () {
    console.log("Creation succeeded!");
});
```

Where:
- target_path - Is the file that will be linked;
- destiny_path - Where the link will be placed;
```
var target_path = path.join(os.home(), "Desktop");
```
- name - Name of the link;
- icon - (Optional) - The icon to associate to the shortcut file; 

## License
Copyright (c) 2019 GWTK Software

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.