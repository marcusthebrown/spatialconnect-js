/*
 * Copyright 2015-present Boundless Spatial Inc., http://boundlessgeo.com
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and limitations under the License.
 */
 
'use strict';

import * as _ from 'lodash';

export function spatialFeature(storeId, layerId, featureProps) {
  if (layerId === undefined) {
    throw 'layerId must be defined for all spatial features.';
  }
  var spatialFeature = {};
  var defaultObj = {
    date: new Date(),
    createdAt: new Date(),
    properties: {},
    storeId: storeId,
    layerId: layerId,
    style: {},
    type: 'Feature'
  };

  spatialFeature = _.defaults({ properties: featureProps }, defaultObj);

  spatialFeature.serialize = function() {
    var obj = {};
    obj.type = this.type;
    obj.storeId = this.storeId;
    obj.layerId = this.layerId;
    obj.properties = this.properties;
    obj.date = this.date;
    obj.createdAt = this.createdAt;
    obj.style = this.style;
    return obj;
  };
  return spatialFeature;
}