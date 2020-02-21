---
title: Unbuntu Add sudoer
date: 2019-10-23
tags:
- server
---

Ubuntu 添加用户到 sudoer
一、概述
新建用户后，我们可能需要该用户能够使用一些越权的东西。sudo命令能够暂时提升该用户的权限到root，但是前提是要求该用户存在与 sudoer list 中。

sudoers 存储在 /etc/sudoers 文件中。

二、操作方法
2.1 进入 root 用户
修改 /etc/sudoers 文件需要 root 权限，因此需要你进入到 root 用户下（su 命令为登录 root 用户）。

兴许你也能够在某个 sudoer 的用户下，使用 sudo vi /etc/sudoers 命令去修改该文件。

2.2 获取 /etc/sudoers 文件的写权限
如果能够得到写权限，那么可以直接进行下一步。

如果在 root 模式下，还是没有该文件的写权限的话，可以使用 "chmod u+w /etc/sudoers" 命令添加文件的写权限。

2.3 编辑 /etc/sudoers 文件
"root ALL=(ALL) ALL" 在起下面添加 "xxx ALL=(ALL) ALL" (这里的 xxx 是你的用户名)，然后保存退出。

2.4 撤销 /etc/sudoers 文件的写权限
执行命令 chmod u-w /etc/sudoers





