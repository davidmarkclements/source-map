/* -*- Mode: js; js-indent-level: 2; -*- */
/* ***** BEGIN LICENSE BLOCK *****
 * Version: MPL 1.1/GPL 2.0/LGPL 2.1
 *
 * The contents of this file are subject to the Mozilla Public License Version
 * 1.1 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/
 *
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 * for the specific language governing rights and limitations under the
 * License.
 *
 * The Original Code is Mozilla Source Map.
 *
 * The Initial Developer of the Original Code is Mozilla.
 * Portions created by the Initial Developer are Copyright (C) 2011
 * the Initial Developer. All Rights Reserved.
 *
 * Contributor(s):
 *      Nick Fitzgerald <nfitzgerald@mozilla.com> (original author)
 *
 * Alternatively, the contents of this file may be used under the terms of
 * either the GNU General Public License Version 2 or later (the "GPL"), or
 * the GNU Lesser General Public License Version 2.1 or later (the "LGPL"),
 * in which case the provisions of the GPL or the LGPL are applicable instead
 * of those above. If you wish to allow use of your version of this file only
 * under the terms of either the GPL or the LGPL, and not to allow others to
 * use your version of this file under the terms of the MPL, indicate your
 * decision by deleting the provisions above and replace them with the notice
 * and other provisions required by the GPL or the LGPL. If you do not delete
 * the provisions above, a recipient may use your version of this file under
 * the terms of any one of the MPL, the GPL or the LGPL.
 *
 * ***** END LICENSE BLOCK ***** */
define(function (require, exports, module) {

  /**
   * A data structure which is a combination of an array and a set. Adding a new
   * member is O(n), testing for membership is O(1), and finding the index of an
   * element is O(1). Only strings are supported for membership.
   */
  function ArraySet () {
    this._array = [];
    this._set = {};
  }

  /**
   * Add the given string to this set.
   *
   * @param String str
   */
  ArraySet.prototype.add = function ArraySet_add (str) {
    var idx = this._array.length;
    this._array.push(str);
    this._set[str] = idx;
  };

  /**
   * Is the given string a member of this set?
   *
   * @param String str
   */
  ArraySet.prototype.has = function ArraySet_has (str) {
    return this._set.hasOwnProperty(str);
  };

  /**
   * What is the index of the given string in the array?
   *
   * @param String str
   */
  ArraySet.prototype.indexOf = function ArraySet_indexOf (str) {
    if ( this.has(str) ) {
      return this._set[str];
    } else {
      throw new Error('"' + str + '" is not in the set.');
    }
  };

  /**
   * Returns the array representation of this set (which has the proper indices
   * indicated by indexOf).
   */
  ArraySet.prototype.toArray = function ArraySet_toArray () {
    return this._array.slice();
  };

  exports.ArraySet = ArraySet;

});